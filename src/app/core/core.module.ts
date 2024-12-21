import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [provideHttpClient()],
})
export class CoreModule {}
