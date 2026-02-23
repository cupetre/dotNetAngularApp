namespace backend.Models

{
    public class City
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public DateTime LastUpdatedOn { get; set; }
        public int LastUpdatedBy { get; set; }
    }
}