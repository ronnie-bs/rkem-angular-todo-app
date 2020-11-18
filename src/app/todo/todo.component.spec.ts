import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
    let fixture: ComponentFixture<TodoComponent>;
    let todoComponent: TodoComponent;

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
            todoComponent = fixture.componentInstance;
        });
    }));

    it('should create the todo component', () => {
        expect(todoComponent).toBeTruthy();
    });

    it('should call onAddTodoText() when Add button clicked', () => {
        const addButtonHandlerSpy = spyOn(todoComponent, 'onAddTodoText');
        const addButtonEl = fixture.debugElement.nativeElement.querySelector('button#addButton');
        addButtonEl.click();
        expect(addButtonHandlerSpy).toHaveBeenCalled();
    });

    it('should call onAddTodoText() when todoText Input keyup Enter', () => {
        const addButtonHandlerSpy = spyOn(todoComponent, 'onAddTodoText');
        const todoTextInputEl = fixture.debugElement.nativeElement.querySelector('input#todoText');
        const event = new KeyboardEvent('keyup', { key: 'Enter' });
        todoTextInputEl.dispatchEvent(event);
        expect(addButtonHandlerSpy).toHaveBeenCalled();
    });

    it('should add a new todo item to the list when Add button clicked', () => {
        fixture.detectChanges();

        const testTodoItemText = 'Test Todo Item';
        const todoTextInputEl = fixture.debugElement.nativeElement.querySelector('input#todoText');
        todoTextInputEl.value = testTodoItemText;
        todoTextInputEl.dispatchEvent(new Event('input'));

        const addButtonEl = fixture.debugElement.nativeElement.querySelector('button#addButton');
        addButtonEl.click();
        expect(todoComponent.todoList.map(item => item.text)).toContain(testTodoItemText);
    });

    it('should call onClearTodoText() when Clear button clicked', () => {
        const clearButtonHandlerSpy = spyOn(todoComponent, 'onClearTodoText');
        const clearButtonEl = fixture.debugElement.nativeElement.querySelector('button#clearButton');
        clearButtonEl.click();
        expect(clearButtonHandlerSpy).toHaveBeenCalled();
    });
});
