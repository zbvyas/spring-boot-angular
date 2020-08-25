package com.todo.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    // acts as the hardcoded database until we wire up JPA and Hibernate
    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(idCounter++, "defaultusername", "Learn Spring Boot", new Date(), false));
        todos.add(new Todo(idCounter++, "defaultusername", "Learn Microservices", new Date(), false));
        todos.add(new Todo(idCounter++, "defaultusername", "Learn Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
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
