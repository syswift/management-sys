import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import drawerWidth from '../globalData'
import axios from 'axios';

import Pagination from '@mui/material/Pagination';


// 弹窗
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function createData(turnoverNumber, customerCode, terminalCode, turnoverState, turnoverType,founders,createTime,operation) {
    return { turnoverNumber, customerCode, terminalCode, turnoverState, turnoverType,founders,createTime,operation};
  }
function turnState(flag){
  if(flag){
    return <Button variant="outlined" color="primary">新增</Button>
  }else{
    return <Button variant="outlined">完成</Button>
  }
}
// 周转类型的判断
function operationState(flag){
  if(flag){
    return (
      <div>
        <Button variant="outlined" color="secondary">取消</Button>&emsp;
        <Button variant="outlined" color="primary">新增</Button>&emsp;
        <Button variant="outlined">完成周转</Button>
      </div>
      )
  }else{
    return ''
  }
}

const onSubmit = async (event) => {
  
        event.preventDefault();
        
        const customerSelect = values.customerSelect;
        const terminalSelect = values.terminalSelect;
        const turnoverTypeSelect = values.turnoverTypeSelect;
        const turnoverCodeSelect = values.turnoverTypeSelect;
        const processPer = await axios.get('/api/auth/currentuser');

        alert(customerSelect+' '+terminalSelect+' '+turnoverTypeSelect+' '+turnoverCodeSelect+' '+processPer);

        //setValues({...values});
        /*
        try{
            const response = await axios.post('/api/auth/signup', {
                email, password, con_password
            })
            console.log(response);
            //success upload
        } 
        catch (err) {
            values.errors = err.response.data.errors;
            console.log(values.errors);
        }
        */ 
}
  
  const rows = [
    createData('RT2021060100001', 'CU_JS00001', 'EU_SD_00002',true,'逆向周转','陈超','2021-06-01 09:29:31',true),
    createData('RT2021051700001', 'CU_JS00001', 'EU_SD_00002',true,'逆向周转','陈超','2021-06-01 09:29:31',false),
    createData('RT2021052900004', 'CU_JS00001', 'EU_JL_00001',true,'逆向周转','陈超','2021-06-01 09:29:31',false),
    createData('RT2021052900003', 'CU_JS00001', 'EU_SC_00002',false,'逆向周转','陈超','2021-06-01 09:29:31',false),
    createData('RT2021052900002', 'CU_JS00001', 'EU_SD_00002',false,'逆向周转','陈超','2021-06-01 09:29:31',false),
    createData('RT2021052900001', 'CU_JS00001', 'EU_SD_00002',false,'逆向周转','陈超','2021-06-01 09:29:31',false),
    createData('RT2021052800004', 'CU_JS00001', 'EU_JL_00001',false,'逆向周转','陈超','2021-06-01 09:29:31',false),
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
    // 弹窗
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
    //换页
    const [page, setPage] = React.useState(1);
    const pageNumberOnChange=(event,value)=>{
      console.log(value)
      setPage(value)
    }

    return (
      <div style={{width: `calc(100% - ${drawerWidth}px)`,
        height: 'calc(100% - 64px)',
        marginLeft: ` ${drawerWidth}px`,
        marginTop: '64px'}}>
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
                <Select labelId="turnoverTypeLabel" id="turnoverTypeSelect" style={{width: '10%' }}>
                  <MenuItem value="正向周转">正向周转</MenuItem>
                  <MenuItem value="逆向周转">逆向周转</MenuItem>
                </Select>
              </span>
            </div>
            <div>
              
              <center>
                <br></br>
                <form id="sinsertForm" autoComplete="on" onSubmit={onSubmit}>
                  <span>
                    <Button variant="contained" onClick={handleClickOpen} size="medium" color="primary" className={classes.margin}>
                      + 新增周转单
                    </Button>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}>
                      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        新增周转单
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          <span>*周转单号:</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                          <span>*客户代码:</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                          <span>*终端代码:</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </Typography>
                        <Typography gutterBottom>
                          <span>
                            <Input placeho lder="请输入周转单号" inputProps={{ 'aria-label': 'description' }} style={{width: '30%' }}/>  
                          </span>
                          &emsp;
                          <span>
                            <Select labelId="customerLabel" id="customerSelect" style={{width: '30%' }}>
                              <MenuItem value="CU_JS00001">CU_JS00001</MenuItem>
                              <MenuItem value="CU_JS00002">CU_JS00002</MenuItem>
                              <MenuItem value="CU_JS00003">CU_JS00003</MenuItem>
                              <MenuItem value="CU_JS00004">CU_JS00004</MenuItem>
                              <MenuItem value="CU_JS00005">CU_JS00005</MenuItem>
                              <MenuItem value="CU_JS00006">CU_JS00006</MenuItem>
                            </Select>
                          </span>
                          &emsp;
                          <span>
                            <Select labelId="terminalLabel" id="terminalSelect" style={{width: '30%' }} >
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
                        </Typography>
                        <Typography gutterBottom>
                          周转单类型:
                        </Typography>
                        <Typography gutterBottom>
                        <span>
                          <Select labelId="turnoverTypeLabel" id="turnoverTypeSelect" style={{width: '30%' }}>
                            <MenuItem value="正向周转">正向周转</MenuItem>
                            <MenuItem value="逆向周转">逆向周转</MenuItem>
                          </Select>
                        </span>
                        </Typography>
                        <br></br>
                        <span></span>
                        <Typography gutterBottom>
                          <br></br>
                          <div>
                            订单明细
                          </div>
                          <br></br>
                          <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>周转箱代码</TableCell>
                                  <TableCell>数量</TableCell>
                                  <TableCell>操作</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell>
                                    <Select labelId="turnoverCodeLabel" id="turnoverCodeSelect" style={{width: '100%' }} >
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
                                  </TableCell>
                                  <TableCell>
                                  
                                  </TableCell>
                                  <TableCell>
                                  <IconButton aria-label="delete">
                                    <DeleteIcon />
                                  </IconButton>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus variant="contained" onClick={handleClickOpen} size="medium" color="primary" className={classes.margin}>
                          提交
                        </Button>
                      </DialogActions>
                    </BootstrapDialog>
                  </span>
                
                &emsp;&emsp;

                <span>
                <Button variant="outlined" color="primary">
                  查询
                </Button>
                </span>
                </form>
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
                  <TableCell align="center">{turnState(row.turnoverState)}</TableCell>
                  <TableCell align="center">{row.turnoverType}</TableCell>
                  <TableCell align="center">{row.founders}</TableCell>
                  <TableCell align="center">{row.createTime}</TableCell>
                  <TableCell align="center">{operationState(row.operation)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <Pagination count={10}  showFirstButton showLastButton onChange={pageNumberOnChange} />
          </Table>
        </TableContainer>
      </div>
    );
  }