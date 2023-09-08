import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tareas: string[] = [];
  nuevaTarea = '';

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(tarea: string) {
    const index = this.tareas.indexOf(tarea);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }
}

