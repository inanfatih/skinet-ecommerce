namespace Core.Entities
{
    public class Product : BaseEntity
    {
        // c#'ta conventional olarak Pascal casing kullaniliyor. Yani property'lerin ve variable'larin her kelimesinin ilk harfi buyuk yaziliyor
        // Id isimli column u Entity Framework otomatik olarak primary key olarak atiyor.
        // Id'yi BaseEntity'den cektigimiz icin gerek yok.
        // public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        // Asagidaki property'i ProductType yaptigimiz icin Migration olusturdugumuzda bunun sayesinde ProductType icin foreign key olusturulacak
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
    }
}