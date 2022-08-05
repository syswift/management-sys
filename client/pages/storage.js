import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { minHeight } from '@mui/system';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';

function createData(turnoverNumber, customerCode, terminalCode, turnoverState, turnoverType,founders,createTime,operation) {
  return { turnoverNumber, customerCode, terminalCode, turnoverState, turnoverType,founders,createTime,operation};
}

function test(){
alert('测试测试')
}
  
  const rows = [
    createData('RT2021060100001', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021051700001', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052900004', 'CU_JS00001', 'EU_JL_00001','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052900003', 'CU_JS00001', 'EU_SC_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052900002', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052900001', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052800004', 'CU_JS00001', 'EU_JL_00001','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052800003', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052800002', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消'),
    createData('RT2021052800001', 'CU_JS00001', 'EU_SD_00002','新增','逆向周转','陈超','2021-06-01 09:29:31','取消')
  ];

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  export default function BasicTable() {
    // 选项卡
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // 按钮组件
    const classes = useStyles();

    return (
      <div>
        <br></br>
        <div component={Paper}>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example">
              <Tab label="周转单管理" />
            </Tabs>
            <div>
              <br></br>
              <span className='boxStyle'>
                &emsp;&emsp;&emsp;&emsp;周转单号:&emsp;&emsp;&emsp;&emsp;
              </span>
              <span>
                <Input placeholder="请输入周转单号" inputProps={{ 'aria-label': 'description' }} style={{width: '10%' }}/>
              </span>
              <span>
                &emsp;&emsp;&emsp;&emsp;客户代码:&emsp;&emsp;&emsp;&emsp;
              </span>
              <span>
                {/* <InputLabel id="label">年龄</InputLabel> */}
                <Select labelId="customerLabel" id="customerSelect" style={{width: '10%' }}>
                  <MenuItem value="CU_JS00001">CU_JS00001</MenuItem>
                  <MenuItem value="CU_JS00002">CU_JS00002</MenuItem>
                  <MenuItem value="CU_JS00003">CU_JS00003</MenuItem>
                  <MenuItem value="CU_JS00004">CU_JS00004</MenuItem>
                  <MenuItem value="CU_JS00005">CU_JS00005</MenuItem>
                  <MenuItem value="CU_JS00006">CU_JS00006</MenuItem>
                </Select>
              </span>
              <span>
                &emsp;&emsp;&emsp;&emsp;终端代码:&emsp;&emsp;&emsp;&emsp;
              </span>
              <span>
                {/* <InputLabel id="label">年龄</InputLabel> */}
                <Select labelId="terminalLabel" id="terminalSelect" style={{width: '10%' }} >
                  <MenuItem value="EU_HB_00001">EU_HB_00001</MenuItem>
                  <MenuItem value="EU_AH_00001">EU_AH_00001</MenuItem>
                  <MenuItem value="EU_AH_00002">EU_AH_00002</MenuItem>
                  <MenuItem value="EU_NMG_00001">EU_NMG_00001</MenuItem>
                  <MenuItem value="EU_BJ_00001">EU_BJ_00001</MenuItem>
                  <MenuItem value="EU_SC_00001">EU_SC_00001</MenuItem>
                  <MenuItem value="EU_SH_00001">EU_SH_00001</MenuItem>
                  <MenuItem value="EU_HN_00001">EU_HN_00001</MenuItem>
                  <MenuItem value="EU_AH_00003">EU_AH_00003</MenuItem>
                  <MenuItem value="EU_AH_00004">EU_AH_00004</MenuItem>
                </Select>
              </span>
              <span>
                &emsp;&emsp;&emsp;&emsp;周转单状态:&emsp;&emsp;&emsp;&emsp;
              </span>
              <span>
                {/* <InputLabel id="label">年龄</InputLabel> */}
                <Select labelId="turnoverStateLabel" id="turnoverStateSelect" style={{width: '10%' }}>
                  <MenuItem value="完成">完成</MenuItem>
                  <MenuItem value="新增">新增</MenuItem>
                </Select>
              </span>
            </div>
            <div>
              <br></br>
              <span>
                &emsp;&emsp;&emsp;&emsp;周转单类型:&emsp;&emsp;&emsp;
              </span>
              <span>
                {/* <InputLabel id="label">年龄</InputLabel> */}
                <Select labelId="turnoverTypeLabel" id="turnoverTypeSelect" style={{width: '10%' }}>
                  <MenuItem value="正向周转">正向周转</MenuItem>
                  <MenuItem value="逆向周转">逆向周转</MenuItem>
                </Select>
              </span>
            </div>
            <div>
              <center>
                <br></br>
                <span>
                  <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={test}>
                    + 新增周转单
                  </Button>
                </span>
                &emsp;&emsp;
                <span>
                <Button variant="outlined" color="primary">
                  查询
                </Button>
                </span>
                <br></br>
                <br></br>
              </center>
            </div>
          </Paper>
        </div>
        <br></br>
        {/* 一张表 */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>周转单号</TableCell>
                <TableCell align="center">客户代码</TableCell>
                <TableCell align="center">终端代码</TableCell>
                <TableCell align="center">周转单状态</TableCell>
                <TableCell align="center">周转类型</TableCell>
                <TableCell align="center">创建人</TableCell>
                <TableCell align="center">创建时间</TableCell>
                <TableCell align="center">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.turnoverNumber}
                  </TableCell>
                  <TableCell align="center">{row.customerCode}</TableCell>
                  <TableCell align="center">{row.terminalCode}</TableCell>
                  <TableCell align="center">{row.turnoverState}</TableCell>
                  <TableCell align="center">{row.turnoverType}</TableCell>
                  <TableCell align="center">{row.founders}</TableCell>
                  <TableCell align="center">{row.createTime}</TableCell>
                  <TableCell align="center">{row.operation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }