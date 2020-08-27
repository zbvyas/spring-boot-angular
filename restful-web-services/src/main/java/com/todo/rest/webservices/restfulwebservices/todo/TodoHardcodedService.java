package com.todo.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    // acts as the hardcoded database until we wire up JPA and Hibernate
    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "defaultusername", "Learn Spring Boot", new Date(), false));
        todos.add(new Todo(++idCounter, "defaultusername", "Learn Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "defaultusername", "Learn Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo) {
        if(todo.getId() == -1 || todo.getId() == 0) {
            // CREATE
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            // UPDATE
            // because this is a hardcoded list, we can just delete the recreate for now
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if(todo == null) return null;

        todos.remove(todo);
        return todo;
    }

    public Todo findById(long id) {
        for(Todo todo:todos) {
            if(todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

}
