using System;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;

public class DB_Info
{
    public static DataTable GetInfo()
    {
        DataTable dataTable = new DataTable();
        dataTable.Columns.Add("a", typeof(string));
        dataTable.Columns.Add("b", typeof(string));
        dataTable.Columns.Add("c", typeof(string));
       
            DataRow dataRow = dataTable.NewRow();
            dataRow["a"] = "aaaaaaaaaa";
            dataRow["b"] = "52656565666";
            dataRow["c"] = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
            dataTable.Rows.Add(dataRow);
       
        return dataTable;
        
    }
}
