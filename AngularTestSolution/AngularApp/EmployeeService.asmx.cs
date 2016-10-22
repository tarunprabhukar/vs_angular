using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AngularApp
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetEmployees()
        {
            List<Employee> employeelist = new List<Employee>
            {
                 new Employee
                {
                    ID=1,
                    Age=25,
                    JoiningDate=DateTime.Parse(DateTime.Today.ToString()),
                    name="allan"
                },
                new Employee
                {
                     ID=2,
                    Age=26,
                    JoiningDate=DateTime.Parse(DateTime.Today.ToString()),
                    name="Ben"
                },
                new Employee
                {
                     ID=3,
                    Age=27,
                    JoiningDate=DateTime.Parse(DateTime.Today.ToString()),
                    name="Cannon"
                },
                new Employee
                {
                     ID=4,
                    Age=28,
                    JoiningDate=DateTime.Parse(DateTime.Today.ToString()),
                    name="Dora"
                }
            };

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(employeelist));
        }
    }
}
