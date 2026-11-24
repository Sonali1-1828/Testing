
using EmployeeManagementSystem.Models;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace EmployeeManagementSystem.Models
{
    public class Employee
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = "";

        [Required]
        [EmailAddress]
        public string Email { get; set; } = "";

        [Required]
        public string Department { get; set; } = "";

        [Required]
        public string Designation { get; set; } = "";

        [Range(0.01, 10000000)]
        public double Salary { get; set; }

        public DateTime JoiningDate { get; set; } = DateTime.Now;
    }

}

