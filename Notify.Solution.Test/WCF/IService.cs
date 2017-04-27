using System.ServiceModel;

namespace Notify.Solution.Test.WCF
{
    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        string GetService(string msg);
    }

    public class Service : IService
    {
        public string GetService(string msg)
        {
            return msg;
        }
    }
}
