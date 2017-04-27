using System;
using System.IO;
using System.ServiceModel;

using Notify.Solution.Code.WCF;
using Notify.Solution.Test.WCF;
using System.ServiceModel.Channels;
using System.Threading.Tasks;

namespace Notify.Solution.Test
{


    public class TestWCF
    {
        /// <summary>
        /// 本地代理
        /// </summary>
        private static readonly IService client;

        /// <summary>
        /// Initializes static members of the <see cref="TestWCF"/> class.
        /// </summary>
        static TestWCF()
        {
            string configPath = Path.Combine(AppDomain.CurrentDomain.SetupInformation.ApplicationBase, "WCFConfig\\Service.config");
            client = ServiceProxyFactory.Create<IService>(configPath, "endpointName");
            //ServiceProxyFactory.GetEndpointAddress<IService>(configPath, "ServiceEndpoint");
        }

        public static string GetMessage()
        {
            return client.GetService("xxxxxxxxxxxxxxxxxxxxxxxxxxx");
        }
    }

  
}
