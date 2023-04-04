import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


//comprobamos si el usuario tiene geolocalización
if ( !navigator.geolocation ){
  //alert('')
  throw new Error('El navegador no soporta la geolocalización');
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
