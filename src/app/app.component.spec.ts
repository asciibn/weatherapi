import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherService } from './services/weather.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { NgStickyDirective } from 'ng-sticky';
import { BodyComponent } from './components/body/body.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        NgStickyDirective
      ],
      imports: [HttpClientModule, FlexLayoutModule],
      providers: [WeatherService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
