using System.Collections.Generic;
using System.Linq;
using Notify.Solution.Code.Extension;

namespace Notify.Solution.Finance.Aipay
{
    /// <summary>
    /// 处理支付宝回调
    /// </summary>
    public class ProcessResponse
    {
        public static bool VerifySign(IDictionary<string, string> param)
        {
            var charset = param["_input_charset"];
            var sign = param["sign"];
            var content = param.Where(w => w.Key != "sign_type" && w.Key != "sign").Join("&", p => p.Key + "=" + p.Value);
            return Signature.VerfiyMd5(content, Config.AccountKey, charset, sign);
        }
    }
}
