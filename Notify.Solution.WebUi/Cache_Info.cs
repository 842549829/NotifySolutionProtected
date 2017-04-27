using System;
using System.Data;
using System.Linq;
using System.Web;
using Memcached.ClientLibrary;
using System.Collections.Generic;
using System.Collections;

public class Cache_Info
{
    private readonly static string CacheKey = "Info_key";

    private static bool IsCache(MemcachedClient pMC,string pKey) 
    {
        if (pMC.KeyExists(pKey))
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    private static bool StoreCache(string pKey,object pObject) 
    {
        MemcachedClient mc = new MemcachedClient();
        mc.EnableCompression = true;
        bool _result = false;
        if (IsCache(mc, pKey))
        {
            if (mc.Get(pKey) == null)
            {
                mc.Set(pKey, pObject);//缓存存在，强行覆盖
            }
            else 
            {
                mc.Replace(pKey, pObject);//缓存存在，强行覆盖
            }
            _result = true;
        }
        else 
        {
            mc.Add(pKey, pObject);//第一次加载缓存
            _result = true;
        }
        return _result;
    }

    public static bool RemoveCache(string pKey) 
    {
        MemcachedClient mc = new MemcachedClient();
        mc.EnableCompression = true;
        return mc.Delete(pKey);
    }

    public static DataTable GetInfo() 
    {
        MemcachedClient mc = new MemcachedClient();
        mc.EnableCompression = true;
        if (mc.Get(CacheKey)!=null)
        {
            return mc.Get(CacheKey) as DataTable;
        }
        else 
        {
            if (StoreCache(CacheKey, DB_Info.GetInfo()))
            {
                return mc.Get(CacheKey) as DataTable;
            }
            else 
            {
                return null;
            }
        }
    }


  
          
}


