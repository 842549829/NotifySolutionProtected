using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CacheConsole
{
    public class Cache
    {
        private static int Num=50;
        private static object obj = new object();

        static Cache()
        { 
        
        }


        public static int Get()
        {
            return Num;
        }

        public static void Update(int argValue)
        {
            lock (obj)
            {
                Num = argValue;
            }
        }
    }
}
