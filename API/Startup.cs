using API.Extensions;
using API.Helpers;
using API.Middleware;
using AutoMapper;
using Infrastructure.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // Ayni zamanda DEPENDECY INJECTION CONTAINER olarak kullaniliyor
        // Dependency injection: You inject something into a class to use it in that class
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddControllers();
            services.AddDbContext<StoreContext>(x => x.UseSqlite(_config.GetConnectionString("DefaultConnection")));
            // Asagidakinin yukaridaki AddControllers tan sonra gelmesi gerekiyor.
            services.AddApplicationServices(); // Bununla Extensions dosyasindaki ApplicationServicesExtensions i services a eklemis oluyoruz.
            services.AddSwaggerDocumentation();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        // Middleware'ler buraya ekleniyor. 
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            // }
            app.UseMiddleware<ExceptionMiddleware>();

            app.UseStatusCodePagesWithReExecute("/errors/{0}");
            // HTTP ye gelen talepler bununla https'e yonlendirilecek
            app.UseHttpsRedirection();

            app.UseRouting();

            // Asagidaki middleware sayesinde wwwroot klasorundeki statik resimlerin de gosterilmesini saglayabiliyoruz.
            app.UseStaticFiles();

            app.UseAuthorization();
            // app.UseSwagger();
            // app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "SkiNet API v1"); });
            app.UseSwaggerDocumentation();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}