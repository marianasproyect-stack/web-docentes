package com.universidad.docente.controller;

import com.universidad.docente.model.docente;
import com.universidad.docente.service.docenteservice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/docentes")
@CrossOrigin(origins = "*")
public class docentecontroller {

    private final docenteservice service;

    public docentecontroller(docenteservice service) {
        this.service = service;
    }

    // Trae todos los docentes
    @GetMapping
    public List<docente> obtenerTodos() {
        return service.obtenerTodos();
    }

    // Guarda un docente nuevo
    @PostMapping
    public docente guardar(@RequestBody docente docente) {
        return service.guardar(docente);
    }

    // Busca un docente por id
    @GetMapping("/{id}")
    public ResponseEntity<docente> obtenerPorId(@PathVariable Long id) {
        docente docente = service.obtenerPorId(id);
        if (docente == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(docente);
    }

    // Actualiza un docente
    @PutMapping("/{id}")
    public docente actualizar(@PathVariable Long id, @RequestBody docente docente) {
        return service.actualizar(id, docente);
    }

    // Elimina un docente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.ok().build();
    }
}
