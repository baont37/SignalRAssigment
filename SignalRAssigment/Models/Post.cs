using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SignalRAssigment.Models
{
    public class Post
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int PostID { get; set; }
        [Required(ErrorMessage = "Please choose created date")]
        public DateTime CreatedDate { get; set; }
        [Required(ErrorMessage = "Please choose updated date")]
        public DateTime UpdatedDate { get; set; }
        [Required(ErrorMessage = "Please enter title")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Please enter content")]
        public string Content { get; set; }
        [Required(ErrorMessage = "Please enter publish status")]
        public string PublishStatus { get; set; }
        [Required(ErrorMessage = "Please enter category")]
        public string Category { get; set; }
        [Required(ErrorMessage = "Please enter author")]
        public string Author { get; set; }
    }
}
