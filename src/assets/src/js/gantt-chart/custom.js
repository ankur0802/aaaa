var tasks = [{
    start: '2022-2-01',
    end: '2022-5-08',
    name: 'Redesign website',
    id: "Task 0",
    progress: 20,
    custom_class: 'tile-primary'
},
{
    start: '2022-3-03',
    end: '2022-6-06',
    name: 'Write new content',
    id: "Task 1",
    progress: 30,
    dependencies: 'Task 0',
    custom_class: 'tile-danger'
},
{
    start: '2022-3-03',
    end: '2022-6-12',
    name: 'Apply new styles',
    id: "Task 2",
    progress: 60,
    dependencies: 'Task 1',
    custom_class: 'tile-info'
},
{
    start: '2022-2-18',
    end: '2022-7-09',
    name: 'Project Review',
    id: "Task 3",
    progress: 50,
    dependencies: 'Task 2',
    custom_class: 'tile-warning'
},
{
    start: '2022-4-12',
    end: '2022-8-10',
    name: 'Review and Testing',
    id: "Task 4",
    progress: 40,
    dependencies: 'Task 3',
    custom_class: 'tile-danger'
},
{
    start: '2022-5-20',
    end: '2022-7-25',
    name: 'UI changes',
    id: "Task 5",
    progress: 55,
    dependencies: 'Task 2',
    custom_class: 'tile-info'
},
{
    start: '2022-6-12',
    end: '2022-9-13',
    name: 'Website Redesign',
    id: "Task 6",
    progress: 60,
    dependencies: 'Task 4',
    custom_class: 'tile-primary'
},
{
    start: '2022-6-30',
    end: '2022-10-05',
    name: 'Dashboard Review and Testing',
    id: "Task 7",
    progress: 35,
    dependencies: 'Task 0',
    custom_class: 'tile-warning'
},
{
    start: '2022-7-14',
    end: '2022-9-05',
    name: 'Banner Ads',
    id: "Task 8",
    progress: 40,
    dependencies: 'Task 3',
    custom_class: 'tile-danger'
},
{
    start: '2022-8-10',
    end: '2022-10-25',
    name: 'Project Discussion',
    id: "Task 9",
    progress: 65,
    dependencies: 'Task 5',
    custom_class: 'tile-primary'
},
{
    start: '2022-9-02',
    end: '2022-11-07',
    name: 'Multiple Browsers Testing',
    id: "Task 10",
    progress: 42,
    dependencies: 'Task 4',
    custom_class: 'tile-primary'
}
]
var gantt_chart = new Gantt(".gantt-target", tasks, {
on_click: function(task) {
    console.log(task);
},
on_date_change: function(task, start, end) {
    console.log(task, start, end);
},
on_progress_change: function(task, progress) {
    console.log(task, progress);
},
on_view_change: function(mode) {
    console.log(mode);
},
view_mode: 'Month',
language: 'en',
});
console.log(gantt_chart);