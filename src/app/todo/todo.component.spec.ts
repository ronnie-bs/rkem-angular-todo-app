import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
    let fixture: ComponentFixture<TodoComponent>;
    let component: TodoComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodoComponent,
            ],
            imports: [
                FormsModule,
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should create the todo component', () => {
        expect(component).toBeTruthy();
    });

    it('should call onAddTodoText() when Add button clicked', () => {
        const addButtonHandlerSpy = spyOn(component, 'onAddTodoText');
        const addButton = fixture.debugElement.nativeElement.querySelector('button#addButton');
        addButton.click();
        expect(addButtonHandlerSpy).toHaveBeenCalled();
    });

    it('should call onAddTodoText() when todoText Input keyup Enter', () => {
        const addButtonHandlerSpy = spyOn(component, 'onAddTodoText');
        const todoTextInput = fixture.debugElement.nativeElement.querySelector('input#todoText');
        const event = new KeyboardEvent('keyup', { key: 'Enter' });
        todoTextInput.dispatchEvent(event);
        expect(addButtonHandlerSpy).toHaveBeenCalled();
    });

    it('should call onClearTodoText() when Clear button clicked', () => {
        const clearButtonHandlerSpy = spyOn(component, 'onClearTodoText');
        const clearButton = fixture.debugElement.nativeElement.querySelector('button#clearButton');
        clearButton.click();
        expect(clearButtonHandlerSpy).toHaveBeenCalled();
    });
});
