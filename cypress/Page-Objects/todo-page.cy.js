const NEW_TODO = '.new-todo'
const TODO_ITEMS = '.todo-list label'
const COMPLETE_BUTTON = '.toggle'
const REACT_TODOAPP = 'https://todomvc.com/examples/angularjs/#/'

export class TodoPage{

open() {
    cy.visit(REACT_TODOAPP)
}

addTodo(todoText){
    cy.get(NEW_TODO).type(todoText + '{enter}')
}

addTodos(...todos){
    todos.forEach(
        todo => this.addTodo(todo)
    )
}

todoItem(number){
   return this.todos().eq(number)
}

todos(){
    return cy.get(TODO_ITEMS)
}

filterBy(filter){
    cy.contains('li', filter).click()
}

complete(item){
    cy.contains('li', item).find(COMPLETE_BUTTON).click()
}

shouldShowItems(...expectedItems){
    this.todos().should('have.length',expectedItems.length)
    for(var i = 0; i < expectedItems; i++){
        this.todos().eq(i).should('contain.text', expectedItems[i])
    }
}

}