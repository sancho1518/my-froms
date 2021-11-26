import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmployeeData from './EmployeeData';


const EmployeeDataList = ({data, deleteData, editData}) => {
    const employeeDataList = data.map((dataList) => {
        return (
            <EmployeeData dataList={dataList} deleteData={deleteData} editData={editData} />
        );
    });
    return (
        <div>
            <Container>
                <Row>
                   {employeeDataList} 
                </Row>
            </Container>
            
        </div>
    );
}

export default EmployeeDataList;