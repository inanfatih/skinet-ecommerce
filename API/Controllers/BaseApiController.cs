using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //ApiController, validation da yapiyor. Mesela /api/products/{id} icin id olarak sayi yerine baska birsey girince hata veriyor.

    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    { }
}