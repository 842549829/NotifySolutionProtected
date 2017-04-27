<%@ Page Language="C#" AutoEventWireup="true" Inherits="MemeCache" Codebehind="MemeCache.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
        <asp:Button ID="btnInitialize" runat="server" OnClick="btnInitialize_Click" Text="初始化" />
        <asp:Button ID="btnRemove" runat="server" OnClick="btnRemove_Click" Text="清 除" />
    
    </div>
    </form>
</body>
</html>
