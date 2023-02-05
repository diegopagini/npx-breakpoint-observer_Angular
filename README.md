# npx-breakpoint-observer

## How to use it:

```typescript
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isMobile$: Observable<boolean>;

  constructor(
    private readonly _breakpointService: NpxBreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.isMobile$ = this._breakpointService.isMobile();
  }
}
```
