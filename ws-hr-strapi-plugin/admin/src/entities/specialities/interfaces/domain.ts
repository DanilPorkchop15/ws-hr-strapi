interface Task {
  id: number
  name: string
  isActive: boolean
}

export interface Speciality {
  id: number
  isActive: boolean
  name: string
  tasks: Task[]
}
