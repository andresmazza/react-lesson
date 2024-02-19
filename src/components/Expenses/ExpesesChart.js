import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    console.log('ExpensesChart props:',props);

    const charts = [
        {label: 'Jan', value:0},
        {label: 'Feb', value:0},
        {label: 'Mar', value:0},
        {label: 'Apr', value:0},
        {label: 'May', value:0},
        {label: 'Jun', value:0},
        {label: 'Jul', value:0},
        {label: 'Aug', value:0},
        {label: 'Sep', value:0},
        {label: 'Oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //Starting at 0 => january => 0
        charts[expenseMonth].value += expense.amount;
    }

    console.log('ExpensesChart charts:',charts);
    //  const chartsByMounth = charts.map((mounth) => (
    //      <Chart
    //          key={mounth.label}
    //          label={mounth.label}
    //          value={mounth.value}
    //      />
      
    //    ));

    const chartsByMounth = <Chart points={charts}></Chart>;

  return chartsByMounth;
};

export default ExpensesChart;
