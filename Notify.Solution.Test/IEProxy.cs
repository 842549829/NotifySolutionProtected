using System;
using System.Runtime.InteropServices;

namespace Notify.Solution.WindowsForm
{
    /// <summary>
    /// IEProxy
    /// </summary>
    public class IEProxy
    {
        /// <summary>
        /// The interne t_ optio n_ proxy.
        /// </summary>
        private const int INTERNET_OPTION_PROXY = 38;

        /// <summary>
        /// The interne t_ ope n_ typ e_ proxy.
        /// </summary>
        private const int INTERNET_OPEN_TYPE_PROXY = 3;

        /// <summary>
        /// The interne t_ ope n_ typ e_ direct.
        /// </summary>
        private const int INTERNET_OPEN_TYPE_DIRECT = 1;

        [DllImport("wininet.dll", SetLastError = true)]
        private static extern bool InternetSetOption(IntPtr hInternet, int dwOption, IntPtr lpBuffer, int lpdwBufferLength);

        /// <summary>
        /// The struct_ interne t_ prox y_ info.
        /// </summary>
        public struct Struct_INTERNET_PROXY_INFO
        {
            /// <summary>
            /// The dw access type.
            /// </summary>
            public int DwAccessType;

            /// <summary>
            /// The proxy.
            /// </summary>
            public IntPtr Proxy;

            /// <summary>
            /// The proxy bypass.
            /// </summary>
            public IntPtr ProxyBypass;
        }

        /// <summary>
        /// The internet set option.
        /// </summary>
        /// <param name="strProxy">
        /// The str proxy.
        /// </param>
        /// <returns>
        /// The <see cref="bool"/>.
        /// </returns>
        private static bool InternetSetOption(string strProxy)
        {
            Struct_INTERNET_PROXY_INFO struct_IPI;

            if (string.IsNullOrEmpty(strProxy) || strProxy.Trim().Length == 0)
            {
                strProxy = string.Empty;
                struct_IPI.DwAccessType = INTERNET_OPEN_TYPE_DIRECT;
            }
            else
            {
                struct_IPI.DwAccessType = INTERNET_OPEN_TYPE_PROXY;
            }

            struct_IPI.Proxy = Marshal.StringToHGlobalAnsi(strProxy);
            struct_IPI.ProxyBypass = Marshal.StringToHGlobalAnsi("local");
            int bufferLength = Marshal.SizeOf(struct_IPI);
            IntPtr intptrStruct = Marshal.AllocCoTaskMem(bufferLength);
            Marshal.StructureToPtr(struct_IPI, intptrStruct, true);
            return InternetSetOption(IntPtr.Zero, INTERNET_OPTION_PROXY, intptrStruct, bufferLength);
        }

        /// <summary>
        /// The refresh ie settings.
        /// </summary>
        /// <param name="proxyStr">
        /// The proxy str.
        /// </param>
        /// <returns>
        /// The <see cref="bool"/>.
        /// </returns>
        public bool RefreshIESettings(string proxyStr)
        {
            return InternetSetOption(proxyStr);
        }

        /// <summary>
        /// The disable ie proxy.
        /// </summary>
        /// <returns>
        /// The <see cref="bool"/>.
        /// </returns>
        public bool DisableIEProxy()
        {
            return InternetSetOption(string.Empty);
        }
    }
}
