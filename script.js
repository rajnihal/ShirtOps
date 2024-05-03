var report = JSON.parse(localStorage.getItem('report')) || [];

function showTable(dropdownId, tableId) {
    var dropdown = document.getElementById(dropdownId);
    var table = document.getElementById(tableId);
    if (dropdown && table) {
        var selectedOption = dropdown.value;
        var tableContent = "";
        switch(selectedOption) {
            case "front":
                tableContent = `
                <table id="front-table">
                <tr>
                    <th>OPERATION CODE</th>
                    <th>SECTION</th>
                    <th>OPERATION NAME</th>
                    <th>SMV</th>
                    <th>TARGET/HR</th>
                    <th>M/C TYPE</th>
                    <th>GUIDE</th>
                    <th>PRESSURE FOOT</th>
                    <th>FEED TYPE</th>
                    <th>RPM</th>
                    <th>VIDEO LINK</th>
                    <th>ADD TO REPORT</th>
                </tr>
                <tr>
                    <td>
                        <select onchange="changeOperationCode1(this)">
                            <option value="" disabled selected>SELECT A CODE</option>
                            <option value="FBNPKH01">FBNPKH01</option>
                            <option value="FBHPKA01">FBHPKA01</option>
                            <option value="WCLBA01">WCLBA01</option>
                            <option value="FPKTCR02">FPKTCR02</option>
                            <option value="FPKTHM01">FPKTHM01</option>
                            <option value="FPKTAT01">FPKTAT01</option>
                            <option value="FBHMK01">FBHMK01</option>
                        </select>
                    </td>
        
                    
                </tr>
                </table>`;
                break;
            // Other cases go here

            case "back":
                tableContent = `
                <table id="back-table">
                <tr>
                    <th>OPERATION CODE</th>
                    <th>SECTION</th>
                    <th>OPERATION NAME</th>
                    <th>SMV</th>
                    <th>TARGET/HR</th>
                    <th>M/C TYPE</th>
                    <th>GUIDE</th>
                    <th>PRESSURE FOOT</th>
                    <th>FEED TYPE</th>
                    <th>RPM</th>
                    <th>VIDEO LINK</th>
                    <th>ADD TO REPORT</th>
                </tr>
                <tr>
                    <td>
                        <select onchange="changeOperationCode2(this)">
                            <option value="" disabled selected>SELECT A CODE</option>
                            <option value="BKMLA01">BKMLA01</option>
                            <option value="BKYKA01">BKYKA01</option>
                            <option value="BKYKA02">BKYKA02</option>
                            <option value="BKYKTS01">BKYKTS01</option>
                        </select>                       
                    </td>
                    
                </tr>
                </table>`;
                break;
            
            case "collar":
                 tableContent = `
                    <table id="collar-table">
                    <tr>
                        <th>OPERATION CODE</th>
                        <th>SECTION</th>
                        <th>OPERATION NAME</th>
                        <th>SMV</th>
                        <th>TARGET/HR</th>
                        <th>M/C TYPE</th>
                        <th>GUIDE</th>
                        <th>PRESSURE FOOT</th>
                        <th>FEED TYPE</th>
                        <th>RPM</th>
                        <th>VIDEO LINK</th>
                        <th>ADD TO REPORT</th>
                    </tr>
                    <tr>
                        <td>
                            <select onchange="changeOperationCode3(this)">
                                <option value="" disabled selected>SELECT A CODE</option>
                                <option value="CLNB01">CLNB01</option>
                                <option value="CLRN01">CLRN01</option>
                                <option value="CLEC01">CLEC01</option>
                                <option value="CLRN02">CLRN02</option>
                                <option value="CLTT01">CLTT01</option>
                                <option value="CLTS01">CLTS01</option>
                                <option value="CLPR02">CLPR02</option>
                                <option value="CLPR03">CLPR03</option>
                                <option value="CLPT01">CLPT01</option>
                                <option value="CLCS01">CLCS01</option>
                                <option value="CLEC01">CLEC01</option>
                                <option value="CLPR03">CLPR03</option>
                                <option value="CLBR01">CLBR01</option>
                            </select>                       
                        </td>
                        
                    </tr>
                    </table>`;
                    break;

            case "sleeve":
                 tableContent = `
                    <table id="sleeve-table">
                    <tr>
                        <th>OPERATION CODE</th>
                        <th>SECTION</th>
                        <th>OPERATION NAME</th>
                        <th>SMV</th>
                        <th>TARGET/HR</th>
                        <th>M/C TYPE</th>
                        <th>GUIDE</th>
                        <th>PRESSURE FOOT</th>
                        <th>FEED TYPE</th>
                        <th>RPM</th>
                        <th>VIDEO LINK</th>
                        <th>ADD TO REPORT</th>
                    </tr>
                    <tr>
                        <td>
                            <select onchange="changeOperationCode4(this)">
                                <option value="" disabled selected>SELECT A CODE</option>
                                <option value="SLLPA01">SLLPA01</option>
                                <option value="SLLPF01">SLLPF01</option>
                                <option value="SLUPC01">SLUPC01</option>
                                <option value="SLUPA01">SLUPA01</option>
                            </select>                       
                            </td>
                            
                        </tr>
                        </table>`;
                        break;

                        case "cuff":
                            tableContent = `
                            <table id="cuff-table">
                            <tr>
                                <th>OPERATION CODE</th>
                                <th>SECTION</th>
                                <th>OPERATION NAME</th>
                                <th>SMV</th>
                                <th>TARGET/HR</th>
                                <th>M/C TYPE</th>
                                <th>GUIDE</th>
                                <th>PRESSURE FOOT</th>
                                <th>FEED TYPE</th>
                                <th>RPM</th>
                                <th>VIDEO LINK</th>
                                <th>ADD TO REPORT</th>
                            </tr>
                            <tr>
                                <td>
                                    <select onchange="changeOperationCode5(this)">
                                        <option value="" disabled selected>SELECT A CODE</option>
                                        <option value="CFHM01">CFHM01</option>
                                        <option value="CFRN01">CFRN01</option>
                                        <option value="CFEC01">CFEC01</option>
                                        <option value="CFTT01">CFTT01</option>
                                        <option value="CFTS01">CFTS01</option>
                                        <option value="CFCS1">CFCS1</option>
                                    </select>                       
                                </td>
                                
                            </tr>
                            </table>`;
                            break;

                            case "assembly":
                                tableContent = `
                                <table id="assembly-table">
                                <tr>
                                    <th>OPERATION CODE</th>
                                    <th>SECTION</th>
                                    <th>OPERATION NAME</th>
                                    <th>SMV</th>
                                    <th>TARGET/HR</th>
                                    <th>M/C TYPE</th>
                                    <th>GUIDE</th>
                                    <th>PRESSURE FOOT</th>
                                    <th>FEED TYPE</th>
                                    <th>RPM</th>
                                    <th>VIDEO LINK</th>
                                    <th>ADD TO REPORT</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select onchange="changeOperationCode6(this)">
                                            <option value="" disabled selected>SELECT A CODE</option>
                                            <option value="ASHAT01">ASHAT01</option>
                                            <option value="ASHTS01">ASHTS01</option>
                                            <option value="ACLAT01">ACLAT01</option>
                                            <option value="ACLFS01">ACLFS01</option>
                                            <option value="ASLAT01">ASLAT01</option>
                                            <option value="AAHTS01">AAHTS01</option>
                                            <option value="ASSST01">ASSST01</option>
                                            <option value="ABTMHM01">ABTMHM01</option>
                                            <option value="ACFATT01">ACFATT01</option>
                                            <option value="ABTNATT01">ABTNATT01</option>
                                        </select>                       
                                    </td>
                                    
                                </tr>
                                </table>`;
                                break;
            
                               
        }
        table.innerHTML = tableContent;
        displayReport();
    }
}

function changeOperationCode1(select) {
    var selectedOption = select.value;
    var table = document.getElementById('front-table');
    if (selectedOption === "FBNPKH01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>FBNPKH01</td>
            <td>FRONT</td>
            <td>FRONT BTN PLKT HEM</td>
            <td>0.4</td>
            <td>150</td>
            <td>SNLSNF-UBT</td>
            <td>F2061 1\/8\</td>
            <td>P703(Right)</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1vsXtBP93qGEGPJLTxIyD1lY501wIz8fr/view?usp=drive_link
            ">Watch Front button placket hem!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "FBHPKA01") {
        var newRow1 = table.insertRow(-1);
        newRow1.innerHTML = `
            <td>FBHPKA01</td>
            <td>FRONT</td>
            <td>FRONT BTN HOLE PLKT ATTACH</td>
            <td>0.4</td>
            <td>150</td>
            <td>KANSAI</td>
            <td>NS MF 201- 11\/4\" FULL FOLDER</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>2500</td>
            <td><a href="https://drive.google.com/file/d/1vsXtBP93qGEGPJLTxIyD1lY501wIz8fr/view?usp=drive_link
            ">Watch Front button hole placket attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "WCLBA01") {
        var newRow2 = table.insertRow(-1);
        newRow2.innerHTML = `
            <td>WCLBA01</td>
            <td>FRONT</td>
            <td>W\/C LABLE ATTACH</td>
            <td>0.25</td>
            <td>240</td>
            <td>SNLS-UBT</td>
            <td>NS MF 201- 11\/4\" FULL FOLDER</td>
            <td>P351</td>
            <td>NEEDLE FEED</td>
            <td>2500</td>
            <td><a href="https://drive.google.com/file/d/1QACYeKsS8BvSKQyebbZwO-c5rvbEqXDj/view?usp=drive_link">Watch Wash care label attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "FPKTCR02") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>FPKTCR02</td>
            <td>FRONT</td>
            <td>FRONT PKT CREASE</td>
            <td>0.44</td>
            <td>150</td>
            <td>MANUAL</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1RHqFwNXJZVaLds8jEg095gipkyElhleK/view?usp=drive_link">Watch Front pocket crease!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "FPKTHM01") {
        var newRow5 = table.insertRow(-1);
        newRow5.innerHTML = `
            <td>FPKTHM01</td>
            <td>FRONT</td>
            <td>FRONT PKT HEM</td>
            <td>0.25</td>
            <td>240</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>P351</td>
            <td>NEEDLE FEED</td>
            <td>2500</td>
            <td><a href="https://drive.google.com/file/d/1RHqFwNXJZVaLds8jEg095gipkyElhleK/view?usp=drive_link">Watch Front pocket hem!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "FPKTAT01") {
        var newRow6 = table.insertRow(-1);
        newRow6.innerHTML = `
            <td>FPKTAT01</td>
            <td>FRONT</td>
            <td>FRONT PKT ATTACH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>2000</td>
            <td><a href="https://drive.google.com/file/d/1EHdGRM2asvvjx9BykgULMdqsHW27zeEY/view?usp=drive_link
            ">Watch Front pocket attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "FBHMK01") {
        var newRow7 = table.insertRow(-1);
        newRow7.innerHTML = `
            <td>FBHMK01</td>
            <td>FRONT</td>
            <td>FRONT BTN HOLE MAKE</td>
            <td>0.54</td>
            <td>111</td>
            <td>B\/H INDEXER</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>2000</td>
            <td><a href="https://drive.google.com/file/d/1G27UDtTwTVdVIsim91MI7eveRVQqZHAJ/view?usp=drive_link
            ">Watch Front button hole make!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
}

function changeOperationCode2(select){
    var selectedOption= select.value;
    var table = document.getElementById('back-table');
    if (selectedOption === "BKMLA01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>BKMLA01</td>
            <td>BACK</td>
            <td>BACK MAIN LABEL ATTACH</td>
            <td>0.4</td>
            <td>150</td>
            <td>PATTERN SEWER</td>
            <td>NA</td>
            <td>NA</td>
            <td>NEEDLE FEED</td>
            <td>2200</td>
            <td><a href="https://drive.google.com/file/d/1bIQH367z7QLa5wC0z4sTNiH3agzlqpQY/view?usp=drive_link
            ">Watch Back main label attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "BKYKA01") {
        var newRow2 = table.insertRow(-1);
        newRow2.innerHTML = `
            <td>BKYKA01</td>
            <td>BACK</td>
            <td>BACK YOKE ATTACH & TOPSTITCH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS</td>
            <td>UMA FOLDER (PNEUMATIC 192)</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>2200</td>
            <td><a href="https://drive.google.com/file/d/1G5pD4YpWM98LN3i69mZgVSQCOH2sQqYk/view?usp=drive_link
            ">Watch Back yoke attach & topstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "BKYKA02") {
        var newRow3 = table.insertRow(-1);
        newRow3.innerHTML = `
            <td>BKYKA02</td>
            <td>BACK</td>
            <td>BACK YOKE ATTACH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS</td>
            <td>FLOWER GUIDE (PNEUMATIC 192)</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>2200</td>
            <td><a href="https://drive.google.com/file/d/14CN1C5QqJLZQUGQuahNRYNzzkEN_3Rrk/view?usp=drive_link
            ">Watch Back yoke attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    }
    else if (selectedOption === "BKYKTS01") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>BKYKTS01</td>
            <td>BACK</td>
            <td>BACK YOKE TOP STITCH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS</td>
            <td>NA</td>
            <td>P703(Right)</td>
            <td>DROP FEED</td>
            <td>2200</td>
            <td><a href="https://drive.google.com/file/d/1uBtTF8PG0voBY5ekeyDgjj_t5LCcc6-G/view?usp=drive_link
            ">Watch Back yoke topstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button>
            </td>
        `;
    } 
     
}
function changeOperationCode3(select){
    var selectedOption= select.value;
    var table = document.getElementById('collar-table');
    if (selectedOption === "CLNB01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>CLNB01</td>
            <td>COLLAR</td>
            <td>NB HEM</td>
            <td>0.25</td>
            <td>240</td>
            <td>SNLS</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/14XENd0oa2rftVT9rk-HOwQzTVodpwYMc/view?usp=drive_link
            ">Watch Neck band hem!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLRN01") {
        var newRow2 = table.insertRow(-1);
        newRow2.innerHTML = `
            <td>CLRN01</td>
            <td>COLLAR</td>
            <td>COLLAR RUN STITCH</td>
            <td>0.25</td>
            <td>240</td>
            <td>SNLS</td>
            <td>F501</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1ycWuCE7SOA2OghkLwnRG6iY0lGr7yWfM/view?usp=drive_link">Watch collar runstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLEC01") {
        var newRow3 = table.insertRow(-1);
        newRow3.innerHTML = `
            <td>CLEC01</td>
            <td>COLLAR</td>
            <td>COLLAR EDGE CUT</td>
            <td>0.25</td>
            <td>240</td>
            <td>SNEC</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1VlbRP5F6n-yFQvkxIHFejvwD8RMl93uN/view?usp=drive_link">Watch collar edge cut!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLRN02") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>CLRN02</td>
            <td>COLLAR</td>
            <td>COLLAR RUN STITCH</td>
            <td>0.45</td>
            <td>133</td>
            <td>AUTOZIG</td>
            <td>TEMPLATE</td>
            <td>768</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1uBdwzjepi8LK10G6bhCh-eFmhUzdMOOj/view?usp=sharing
            ">Watch collar runstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLTT01") {
        var newRow6 = table.insertRow(-1);
        newRow6.innerHTML = `
            <td>CLTT01</td>
            <td>COLLAR</td>
            <td>COLLAR TRIM & TURN</td>
            <td>0.45</td>
            <td>133</td>
            <td>COLLAR TRIM & TURN M/C</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1ofTh_JGjozwZNaSR0sCP0_C-bZWg3UHz/view?usp=sharing
            ">Watch collar trim & turn!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLTS01") {
        var newRow7 = table.insertRow(-1);
        newRow7.innerHTML = `
            <td>CLTS01</td>
            <td>COLLAR</td>
            <td>COLLAR TOPSTITCH</td>
            <td>0.4</td>
            <td>150</td>
            <td>SNLSNF-UBT</td>
            <td>NA</td>
            <td>751</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1x42Gir7Y2yLG2GcW0HnNvJjHZNH1DSwV/view?usp=drive_link
            ">Watch Collar topstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLPR02") {
        var newRow9 = table.insertRow(-1);
        newRow9.innerHTML = `
            <td>CLPR02</td>
            <td>COLLAR</td>
            <td>COLLAR PICK READY</td>
            <td>0.44</td>
            <td>146</td>
            <td>SNEC</td>
            <td>PATTERN</td>
            <td>769</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1SWK8U-kiX-Qbg74Q4kou_QyT6KThwYwi/view?usp=drive_link
            ">Watch Collar pick ready!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLPR03") {
        var newRow10 = table.insertRow(-1);
        newRow10.innerHTML = `
            <td>CLPR03</td>
            <td>COLLAR</td>
            <td>COLLAR PICK READY</td>
            <td>0.40</td>
            <td>146</td>
            <td>AUTOZIG</td>
            <td>TEMPLATE</td>
            <td>768</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1OIhOcHi3DVzkzh7mZUEnnmPvdvjWAyKH/view?usp=drive_link
            ">Watch collar pick ready!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLPT01") {
        var newRow11 = table.insertRow(-1);
        newRow11.innerHTML = `
            <td>CLPT01</td>
            <td>COLLAR</td>
            <td>COLLAR PICK TURN & CREASE</td>
            <td>0.2</td>
            <td>300</td>
            <td>MANUAL</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1QVSp2NnAvLGag97zVkl88DHtl68RvnCM/view?usp=drive_link
            ">Watch collar pick turn & crease!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLCS01") {
        var newRow12 = table.insertRow(-1);
        newRow12.innerHTML = `
            <td>CLCS01</td>
            <td>COLLAR</td>
            <td>NB CENTERSTITCH</td>
            <td>0.3</td>
            <td>200</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>P351+GUIDE</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1FNsJFSzze_YKJDJV_626j8V5WJMWKGZM/view?usp=drive_link
            ">Watch NB center stitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLEC01") {
        var newRow13 = table.insertRow(-1);
        newRow13.innerHTML = `
            <td>CLEC01</td>
            <td>COLLAR</td>
            <td>COLLAR READY CUT & MARK</td>
            <td>0.3</td>
            <td>200</td>
            <td>SNEC</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1QyQCQvxMbhZQaFQw0oSw5j7xwKXz6oFi/view?usp=drive_link
            ">Watch Collar ready cut & mark!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CLBR01") {
        var newRow14 = table.insertRow(-1);
        newRow14.innerHTML = `
            <td>CLBR01</td>
            <td>COLLAR</td>
            <td>COLLAR BARTACK)</td>
            <td>0.3</td>
            <td>240</td>
            <td>BARTACK M/C</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>2000</td>
            <td><a href="https://drive.google.com/file/d/1zkZj7-WAiVTRlibUT6rPIFkdATyn6nRD/view?usp=drive_link
            ">Watch collar bartack!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
}
function changeOperationCode4(select){
    var selectedOption= select.value;
    var table = document.getElementById('sleeve-table');
    if (selectedOption === "SLLPA01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>SLLPA01</td>
            <td>SLEEVE</td>
            <td>SLEEVE LOWER PLKT ATTACH</td>
            <td>0.35</td>
            <td>171</td>
            <td>GQ TEK</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1nWotYf1QDM90-X2DMhrfCFp9nabScYc7/view?usp=drive_link
            ">Watch sleeve lower placket attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "SLLPF01") {
        var newRow3 = table.insertRow(-1);
        newRow3.innerHTML = `
            <td>SLLPF01</td>
            <td>SLEEVE</td>
            <td>SLEEVE LOWER PLACKET ATTACH N TACK</td>
            <td>0.55</td>
            <td>95</td>
            <td>SNLS-UBT</td>
            <td>F219</td>
            <td>P703</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1WKxhreR7pmu2oB7pWQBIsWdtmL97mYy5/view?usp=drive_link
            ">Watch sleeve lower placket attach and tack!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "SLUPC01") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>SLUPC01</td>
            <td>SLEEVE</td>
            <td>SLEEVE UPPER PLKT CREASE</td>
            <td>0.5</td>
            <td>120</td>
            <td>SLV PLKT CREASER</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1HcB6Cu2pHQP8vTKy-PZJQdBw-FKzZBhS/view?usp=drive_link
            ">Watch sleeve upper plkt crease!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "SLUPA01") {
        var newRow5 = table.insertRow(-1);
        newRow5.innerHTML = `
            <td>SLUPA01</td>
            <td>SLEEVE</td>
            <td>SLEEVE UPPER PLKT ATTACH</td>
            <td>0.75</td>
            <td>80</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1KnSWAHy3YFuq5evrzrssikN9uiuEl7Qi/view?usp=drive_link
            ">Watch sleeve upper placket attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
}

function changeOperationCode5(select){
    var selectedOption= select.value;
    var table = document.getElementById('cuff-table');
    if (selectedOption === "CFHM01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>CFHM01</td>
            <td>CUFF</td>
            <td>CUFF HEM</td>
            <td>0.3</td>
            <td>200</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1roiVelLPQGqOp48i9_bGphjw51gtflHP/view?usp=drive_link
            ">Watch cuff hem!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CFRN01") {
        var newRow2 = table.insertRow(-1);
        newRow2.innerHTML = `
            <td>CFRN01</td>
            <td>CUFF</td>
            <td>CUFF RUN STITCH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS-UBT</td>
            <td>TEMPLATE</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1FGwmC3YJEeOw4mNup39xeafdZipW_VCi/view?usp=drive_link
            ">Watch cuff runstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CFEC01") {
        var newRow3 = table.insertRow(-1);
        newRow3.innerHTML = `
            <td>CFEC01</td>
            <td>CUFF</td>
            <td>CUFF EXTRA MARGIN TRIM</td>
            <td>0.2</td>
            <td>300</td>
            <td>SNEC</td>
            <td>NA</td>
            <td>STD</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1AjsaGIjygGEPcj4aFo5FREtqJeCF9Oqh/view?usp=drive_link
            ">Watch cuff extra margin trim!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CFTT01") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>CFTT01</td>
            <td>CUFF</td>
            <td>CUFF TURN & PRESS</td>
            <td>0.3</td>
            <td>200</td>
            <td>CUFF TURN M\/C</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1TzoM5DPNX5zPelTpDsjYdetVIJMtncru/view?usp=drive_link
            ">Watch cuff turn and press!</a></td>
            <td><button class="add-to-cart-btn" onclick="addToCart('Front Code 2')">Add</button></td>
        `;
    }
    else if (selectedOption === "CFTS01") {
        var newRow5 = table.insertRow(-1);
        newRow5.innerHTML = `
            <td>CFTS01</td>
            <td>CUFF</td>
            <td>CUFF TOP STITCH</td>
            <td>0.55</td>
            <td>109</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>STD</td>
            <td>DROP FEED</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/13kbu6AjSrWABwBnVEvgvBoa_EV6qURTZ/view?usp=drive_link
            ">Watch cuff topstitch!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "CFCS1") {
        var newRow6 = table.insertRow(-1);
        newRow6.innerHTML = `
            <td>CFCS1</td>
            <td>CUFF</td>
            <td>CUFF CREASE</td>
            <td>0.3</td>
            <td>200</td>
            <td>MANUAL</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td><a href="https://drive.google.com/file/d/1CCq7uBPwHjLRXrlZxSDgvEmtO1YlX4Dw/view?usp=drive_link">Watch cuff creasng!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
}

function changeOperationCode6(select){
    var selectedOption= select.value;
    var table = document.getElementById('assembly-table');
    if (selectedOption === "ASHAT01") {
        var newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>ASHAT01</td>
            <td>ASSEMBLY</td>
            <td>SHOULDER ATTACH</td>
            <td>0.6</td>
            <td>100</td>
            <td>SNLS-UBT</td>
            <td>NA</td>
            <td>P315</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1zuXk3wDUAok8RaWhRiO2iBU5aiOjH_J0/view?usp=drive_link">WATCH SHOULDER ATTACH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ASHTS01") {
        var newRow1 = table.insertRow(-1);
        newRow1.innerHTML = `
            <td>ASHTS01</td>
            <td>ASSEMBLY</td>
            <td>SHOULDER TOP STITCH</td>
            <td>0.4</td>
            <td>150</td>
            <td>SNLSNF-UBT</td>
            <td>NA</td>
            <td>P703 (RIGHT)</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1o4RHus1JvrXZJHn1MZLFZANwRNurzyJk/view?usp=drive_link">WATCH SHOULDER TOPSTITCH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ACLAT01") {
        var newRow2 = table.insertRow(-1);
        newRow2.innerHTML = `
            <td>ACLAT01</td>
            <td>ASSEMBLY</td>
            <td>COLLAR ATTACH</td>
            <td>0.51</td>
            <td>118</td>
            <td>SNLSNF-UBT</td>
            <td>NA</td>
            <td>UMA PRESSURE FOOT</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1wGmhpgxYtt20o39YAoW37VMMhoacClkU/view?usp=drive_link">Watch Collar attach!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ACLFS01") {
        var newRow3 = table.insertRow(-1);
        newRow3.innerHTML = `
            <td>ACLFS01</td>
            <td>ASSEMBLY</td>
            <td>COLLAR FINISH</td>
            <td>0.91</td>
            <td>66</td>
            <td>SNLSNF-UBT</td>
            <td>NA</td>
            <td>UMA PRESSURE FOOT</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/17rs7HT-O73P1TWK5xzxb-p_H__t6edib/view?usp=drive_link">Watch Collar finish!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ASLAT01") {
        var newRow4 = table.insertRow(-1);
        newRow4.innerHTML = `
            <td>ASLAT01</td>
            <td>ASSEMBLY</td>
            <td>SLEEVE ATTACH</td>
            <td>0.9</td>
            <td>67</td>
            <td>DNCS</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>3500</td>
            <td><a href="https://drive.google.com/file/d/1wwjvJ5KBBP1cwfb5ROQ2secf9G6hWfpj/view?usp=drive_link">WATCH SLEEVE ATTACH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "AAHTS01") {
        var newRow5 = table.insertRow(-1);
        newRow5.innerHTML = `
            <td>AAHTS01</td>
            <td>ASSEMBLY</td>
            <td>ARM HOLE TOP STITCH </td>
            <td>0.52</td>
            <td>115</td>
            <td>SNCS</td>
            <td>UMA FOLDER (PNEUMATIC BH)</td>
            <td>NA</td>
            <td>NA</td>
            <td>3500</td>
            <td><a href="https://drive.google.com/file/d/1pPTwkqMxHx7GbFFJ2CUBVncJwHRtjHMp/view?usp=drive_link">WATCH ARMHOLE TOPSTITCH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ASSST01") {
        var newRow6 = table.insertRow(-1);
        newRow6.innerHTML = `
            <td>ASSST01</td>
            <td>ASSEMBLY</td>
            <td>SIDE SEAM STITCH</td>
            <td>0.7</td>
            <td>86</td>
            <td>FOA</td>
            <td>UMA FOLDER (PNEUMATIC 192)</td>
            <td>NA</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1opvVVyEHBMLV3dnHJnR_KzUceEaKb4BJ/view?usp=drive_link">WATCH SIDESEAM STITCH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ABTMHM01") {
        var newRow7 = table.insertRow(-1);
        newRow7.innerHTML = `
            <td>ABTMHM01</td>
            <td>ASSEMBLY</td>
            <td>BOTTOM HEM</td>
            <td>0.6</td>
            <td>100</td>
            <td>SNLSNF-UBT</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1-0UR08rMkiS0ixnFxvppOgj-Kppjch50/view?usp=drive_link">WATCH BOTTOM HEM!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ACFATT01") {
        var newRow8 = table.insertRow(-1);
        newRow8.innerHTML = `
            <td>ACFATT01</td>
            <td>ASSEMBLY</td>
            <td>CUFF ATTACH </td>
            <td>0.6</td>
            <td>100</td>
            <td>SNLSNF-UBT</td>
            <td>F22</td>
            <td>P703(RIGHT)</td>
            <td>NA</td>
            <td>2500</td>
            <td><a href="https://drive.google.com/file/d/1SSRHVeuuovyqrLM2oxOWcr1">WATCH CUFF ATTACH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
    else if (selectedOption === "ABTNATT01") {
        var newRow10 = table.insertRow(-1);
        newRow10.innerHTML = `
            <td>ABTNATT01</td>
            <td>ASSEMBLY</td>
            <td>BUTTON ATTACH</td>
            <td>0.9</td>
            <td>67</td>
            <td>BUTTON ATTACH M/C</td>
            <td>NA</td>
            <td>NA</td>
            <td>NA</td>
            <td>3000</td>
            <td><a href="https://drive.google.com/file/d/1O6vwLB4yYh9xe2h94eNor22RbsgiWhP9/view?usp=drive_link">WATCH BUTTON ATTACH!</a></td>
            <td><button class="add-to-report-btn" onclick="addToReport(this)">Add</button></td>
        `;
    }
}
function addToReport(button) {
    var row = button.parentElement.parentElement;
    var rowData = [];
    // Iterate through each cell in the row and add its text content to the rowData array
    row.querySelectorAll('td').forEach(function (cell) {
        rowData.push(cell.textContent);
    });
    report.push(rowData); // Add row data to report
    localStorage.setItem('report', JSON.stringify(report)); // Store report in local storage
    alert("Added to report");
    displayReport();
}

function removeFromReport(index) {
    report.splice(index, 1); // Remove item from report array
    localStorage.setItem('report', JSON.stringify(report)); // Update local storage
    displayReport();
}

function displayReport() {
    var reportTable = document.getElementById('report-table');
    if (reportTable) {
        var reportContent = "<table>";
        reportContent += "<tr><th>Item</th><th>Action</th></tr>";
        report.forEach(function (item, index) {
            reportContent += "<tr><td>" + item[1] + "</td><td><button onclick='removeFromReport(" + index + ")'>Remove</button></td></tr>";
        });
        reportContent += "</table>";
        reportTable.innerHTML = reportContent;
    }
}



        