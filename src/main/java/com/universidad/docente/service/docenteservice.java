package com.universidad.docente.service;

import com.universidad.docente.model.docente;
import com.universidad.docente.repository.docenterepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class docenteservice {

    private final docenterepository repository;

    public docenteservice(docenterepository repository) {
        this.repository = repository;
    }

    // Trae todos los docentes
    public List<docente> obtenerTodos() {
        return repository.findAll();
    }

    // Guarda un docente nuevo
    public docente guardar(docente docente) {
        return repository.save(docente);
    }

    // Busca un docente por id
    public docente obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    // Actualiza un docente existente
    public docente actualizar(Long id, docente docente) {
        docente.setId(id);
        return repository.save(docente);
    }

    // Elimina un docente
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
