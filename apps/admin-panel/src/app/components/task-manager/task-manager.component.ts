import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistributeColorPipe } from '../../pipes/distribute-color.pipe';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [DistributeColorPipe, RouterOutlet],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent {
  public headerIndex = 999;
  public randomOffset = 0;
}
