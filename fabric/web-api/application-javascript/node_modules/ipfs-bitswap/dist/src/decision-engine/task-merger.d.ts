export = TaskMerger;
/**
 * @typedef {import('./types').Task} Task
 * @typedef {import('./types').TaskMerger} TaskMergerAPI
 */
/** @type {TaskMergerAPI} */
declare const TaskMerger: TaskMergerAPI;
declare namespace TaskMerger {
    export { Task, TaskMergerAPI };
}
type TaskMergerAPI = import('./types').TaskMerger;
type Task = import('./types').Task;
//# sourceMappingURL=task-merger.d.ts.map