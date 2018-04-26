var table;
document.write("<table border='1px'>");

for(let y = 1; y <= 10; y++) {

    document.write("<tr style='height:30px;'>");

    for(let x = 1; x <= 10; x++) {

        if(y == 1 || x == 1) {
            table = "purple";
        }
        else {
            table = "grey";
        }

        document.write("<td style='width:30px;background-color:" + table + "'>" + x*y + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");
