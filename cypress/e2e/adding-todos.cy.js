/// <reference types="cypress"/>

import { TodoPage } from "../Page-Objects/todo-page.cy.js"

describe('keeping track stuff to do', () =>{

    const todoPage = new TodoPage()

    beforeEach(() => {

        todoPage.open()

    })

    describe('adding a todo item to the todo list', () =>{

        it('should add a new item to the list', () =>{
            
            todoPage.addTodo("Feed the cats")          
            
            cy.contains('.todo-list li','Feed the cats').should('be.visible')

        })

    })

    describe('filtering to do list', () =>{

        it('should filter to show only completed items', () =>{

            todoPage.addTodos('Feed the cats','Walk the dog')
            todoPage.complete('Walk the dog')
            todoPage.filterBy('Completed')
            todoPage.shouldShowItems('Walk the dog')

        })

        it('should not show clompleted todos in the active list', () =>{

            todoPage.addTodos('feed the lions', 'walk the panters','walk the chihuahua')
            todoPage.filterBy('Active')
            todoPage.shouldShowItems('feed the lions', 'walk the panters', 'walk the chihuahua')
            todoPage.complete('feed the lions')
            todoPage.shouldShowItems('walk the panters', 'walk the chihuahua')

        } )

    })
})
