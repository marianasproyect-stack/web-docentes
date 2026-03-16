package com.universidad.docente.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "docentes")
public class docente {

    @Id
    @SequenceGenerator(name = "docentes_seq", sequenceName = "DOCENTES_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "docentes_seq")
    private Long id;

    @Column(name = "tipo_documento")
    private String tipoDocumento;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "nivel_estudios")
    private String nivelEstudios;

    @Column(name = "area")
    private String area;

    @Column(name = "grado")
    private String grado;

    @Column(name = "eps")
    private String eps;

    @Column(name = "salario")
    private Double salario;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTipoDocumento() { return tipoDocumento; }
    public void setTipoDocumento(String tipoDocumento) { this.tipoDocumento = tipoDocumento; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }

    public LocalDate getFechaNacimiento() { return fechaNacimiento; }
    public void setFechaNacimiento(LocalDate fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }

    public String getNivelEstudios() { return nivelEstudios; }
    public void setNivelEstudios(String nivelEstudios) { this.nivelEstudios = nivelEstudios; }

    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }

    public String getGrado() { return grado; }
    public void setGrado(String grado) { this.grado = grado; }

    public String getEps() { return eps; }
    public void setEps(String eps) { this.eps = eps; }

    public Double getSalario() { return salario; }
    public void setSalario(Double salario) { this.salario = salario; }
}