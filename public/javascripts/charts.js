$(document).ready(function() {

	var test = {
			data: [{
	            studentName: 'John',
	            data: [5, 3, 4]
	        }, {
	            studentName: 'Jane',
	            data: [2, 2, 3]
	        }, {
	            studentName: 'Joe',
	            data: [3, 4, 4]
	        }]
		};
		series = [],
		len = test.data.length,
		i = 0;
	for(i; i<len;i++){
		console.log(i);
		series.push({
			name: test.data[i].studentName,
			data: test.data[i].data
		});
	}
		$('#container').highcharts({
		    chart: {
		        type: 'bar'
		    },
		    title: {
		        text: 'Students'
		    },
		    xAxis: {
		        categories: ['Apples', "Oranges", "Pairs"]
		    },
		    yAxis: {
		        title: {
		            text: 'Number of students'
		        }
		    },
		    series: series

		    //test.data
		    // series: [{
		    //     name: 'Males',
		    //     //data: [test.students.male]
		    //     data: [1200]
		    // }, {
		    //     name: 'Females',
		    //     //data: [test.students.female]
		    //     data: [500]
		    // }]
		});
});
