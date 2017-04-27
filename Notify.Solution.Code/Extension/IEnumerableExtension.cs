using System;
using System.Collections.Generic;
using System.Linq;

namespace Notify.Solution.Code.Extension
{
    /// <summary>
    /// The i enumerable extension.
    /// </summary>
    public static class IEnumerableExtension
    {
        #region Join
        /// <summary>
        /// 根据字符串拆分数组
        /// </summary>
        /// <param name="source">
        /// 要拆分的数组
        /// </param>
        /// <param name="separator">
        /// 拆分符
        /// </param>
        /// <returns>
        /// 字符串
        /// </returns>
        public static string Join(this IEnumerable<string> source, string separator)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            if (separator == null)
            {
                throw new ArgumentNullException("separator"); 
            }

            return source.Aggregate((x, y) => x + separator + y);
        }

        /// <summary>
        /// 根据字符串拆分数组
        /// </summary>
        /// <typeparam name="TSource">类型</typeparam>
        /// <param name="soucre"> 要拆分的数组</param>
        /// <param name="separator">拆分符</param>
        /// <param name="map">拆分条件</param>
        /// <returns>字符串 <see cref="string"/></returns>
        public static string Join<TSource>(this IEnumerable<TSource> soucre, string separator, Func<TSource, string> map)
        {
            if (soucre == null)
            {
                throw new ArgumentNullException("source");
            }

            if (separator == null)
            {
                throw new ArgumentNullException("separator");
            }

            if (map == null)
            {
                throw new ArgumentNullException("map");
            }

            var enumerable = soucre as TSource[] ?? soucre.ToArray();
            return Join(enumerable.Select(map), separator);
        } 
        #endregion

        #region Sort
        /// <summary>
        /// 多条件排序扩展方法
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="sources">sources</param>
        /// <param name="keySelector">keySelector</param>
        /// <returns>排序结果</returns>
        public static IEnumerable<TSource> Sort<TSource>(this IEnumerable<TSource> sources, params KeyValuePair<bool, Func<TSource, object>>[] keySelector)
        {
            if (sources == null)
            {
                throw new ArgumentNullException("sources");
            }

            IOrderedEnumerable<TSource> orderBys = null;
            int i = 0;
            foreach (var func in keySelector)
            {
                if (i == 0)
                {
                    orderBys = func.Key ? sources.OrderBy(func.Value) : sources.OrderByDescending(func.Value);
                }
                else
                {
                    if (orderBys != null)
                    {
                        orderBys = func.Key ? orderBys.ThenBy(func.Value) : orderBys.ThenByDescending(func.Value);
                    }
                }

                i++;
            }

            return orderBys;
        } 
        #endregion

        #region MaxElement
        /// <summary>
        ///  获取最大值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <returns>MaxValue</returns>
        public static TElement MaxElement<TElement, TData>(this IEnumerable<TElement> source, Func<TElement, TData> selector)
            where TData : IComparable<TData>
        {
            return ComparableElement(source, selector, true);
        }
        #endregion

        #region MinElement
        /// <summary>
        ///  获取最小值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <returns>MaxValue</returns>
        public static TElement MinElement<TElement, TData>(this IEnumerable<TElement> source, Func<TElement, TData> selector)
          where TData : IComparable<TData>
        {
            return ComparableElement(source, selector, false);
        } 
        #endregion

        #region Max
        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static decimal Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static double Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        } 

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static int Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static long Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static float Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static decimal? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static double? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static int? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static long? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }

        /// <summary>
        /// 求最大值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最大值</returns>
        public static float? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Max();
        }
        #endregion

        #region Min
        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static decimal Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static double Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static int Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static long Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static float Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static decimal? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static double? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static int? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static long? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }

        /// <summary>
        /// 求最小值
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>最小值</returns>
        public static float? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Min();
        }
        #endregion

        #region Sum
        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static decimal Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static double Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static int Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static long Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static float Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static decimal? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, decimal?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum(result => result.GetValueOrDefault());
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static double? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, double?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static int? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, int?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static long? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, long?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        /// <summary>
        /// 求和
        /// </summary>
        /// <typeparam name="TSource">TSource</typeparam>
        /// <param name="source">source</param>
        /// <param name="predicate">predicate</param>
        /// <param name="selector">selector</param>
        /// <returns>和</returns>
        public static float? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate, Func<TSource, float?> selector)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            return source.Where(predicate).Select(selector).Sum();
        }

        #endregion

        #region private
        /// <summary>
        ///  获取最大or最小值的当前对象
        /// </summary>
        /// <typeparam name="TElement">TElement</typeparam>
        /// <typeparam name="TData">TData</typeparam>
        /// <param name="source">source</param>
        /// <param name="selector">selector</param>
        /// <param name="isMax">最大还是最小</param>
        /// <returns>MaxValue</returns>
        private static TElement ComparableElement<TElement, TData>(IEnumerable<TElement> source, Func<TElement, TData> selector, bool isMax)
            where TData : IComparable<TData>
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            if (selector == null)
            {
                throw new ArgumentNullException("selector");
            }

            bool firstElement = true;
            TElement result = default(TElement);
            TData maxValue = default(TData);
            foreach (TElement element in source)
            {
                var candidate = selector(element);
                if (!firstElement)
                {
                    if (isMax && candidate.CompareTo(maxValue) <= 0)
                    {
                        continue;
                    }

                    if (!isMax && candidate.CompareTo(maxValue) > 0)
                    {
                        continue;
                    }
                }

                firstElement = false;
                maxValue = candidate;
                result = element;
            }

            return result;
        }
        #endregion
    }
}