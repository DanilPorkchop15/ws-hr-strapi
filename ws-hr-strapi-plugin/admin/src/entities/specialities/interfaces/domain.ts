interface Task {
  id: number
  name: string
}

export interface Speciality {
  id: number
  isActive: boolean
  name: string
  tasks: Task[]
}
