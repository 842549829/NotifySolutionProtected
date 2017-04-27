using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notify.Solution.WCFClient
{
    using System.ServiceModel;
    using System.ServiceModel.Channels;

    public class Program
    {
        public static void Main(string[] args)
        {
            var result = Proxy.DefayltProxy.GetService("xxxxxxxxxxxxxxxx");
            Console.WriteLine(result);

            Console.ReadLine();
        }
    }

    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        string GetService(string msg);
    }

    public class Proxy : ClientBase<IService>
    {
        private static readonly Binding binding = new NetTcpBinding { Name = "Name", Namespace = "Notify.Solution.WCFClient.IService" };

        private static readonly EndpointAddress endpointAddress = new EndpointAddress("net.tcp://localhost:6665/WCFService");

        protected Proxy()
            : base(binding, endpointAddress)
        {
        }

        public string GetService(string name)
        {
            return this.Channel.GetService(name);
        }


        public static IService DefayltProxy
        {
            get
            {
                ChannelFactory<IService> factory = new ChannelFactory<IService>("wcfFirst");
                IService channelProxy = factory.CreateChannel();

                return channelProxy;
            }
        }
    }

}
