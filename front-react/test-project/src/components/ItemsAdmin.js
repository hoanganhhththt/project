import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination'
import Modal from 'react-bootstrap/Modal'

class ItemsAdmin extends Component {
    state = {
        inputAdd: "",
        id: 0,
        inputUpdate: "",
        idDelete: 0,
        inputSearch: '',
        inputLimit: 5,
        inputPage: 1,
        inputAddName: "",
        inputAddPay: "",
        inputAddCategory: "",
        inputAddLink: "",
        isShow: false,
        update: {
            name: "",
            link: "",
            pay: "",
            num: "",
            _id:"",
            category:""
        }
    }

    handleInputAdd(val) {
        this.setState({ inputAdd: val });
    }
    handleInputAddName(val) {
        this.setState({ inputAddName: val })
    }
    handleInputAddPay(val) {
        this.setState({ inputAddPay: val })
    }
    handleInputAddLink(val) {
        this.setState({ inputAddLink: val })
    }
    handleInputAddCategory(val) {
        this.setState({ inputAddCategory: val })
    }
    handleIdUpdate(val) {
        this.setState({ id: val })
    }

    handleIdDelete(val) {
        console.log(val)
        this.setState({ idDelete: val })
    }

    handleInputUpdate(dataUpdate) {
        this.setState({ inputUpdate: dataUpdate })
    }

    handleInputSearch(val) {
        console.log(val)
        this.setState({ inputSearch: val })
    }

    handleInputLimit(val) {
        this.setState({ inputLimit: val })
    }
    handleInputPage(val) {
        this.setState({ inputPage: val })
    }

    handleButtonAdd = () => {
        console.log("day la nut add: ", this.state.inputAddName)
        this.props.addDispatch(this.state.inputAddLink, this.state.inputAddName, this.state.inputAddPay, this.state.inputAddCategory )
    }

    handleButtonUpdate = () => {
        console.log("Value moi se la: ", this.state.inputUpdate);
        this.props.updateDispatch(this.state._id, this.state.link, this.state.name, this.state.pay, this.state.num,this.props.textSearch,this.state.inputPage)
    }

    handleButtonDelete = () => {
        console.log("id cần xóa :", this.state.idDelete)
        this.props.deleteDispatch(this.state.idDelete,this.props.textSearch)
    }

    handleButtonSearch = () => {
        console.log("tìm kiếm:", this.state.inputSearch)
        this.props.searchDispatch(this.state.inputSearch)
    }

    handleButtonPaginate = () => {
        console.log("phân trang:", this.state.inputLimit, this.state.inputPage)
        this.props.paginateDispatch(this.state.inputLimit, this.state.inputPage)
    }
    updateInputSearch=()=>{
        this.setState({inputSearch:this.props.textSearch})
    }
    // handleButtonID = (e) =>{
    //     console.log(e.target.value)
    // }

    render() {
        let listData = [];
        let listMenu = [];
        let listPay = [];
        console.log(this.props.textSearch)
        let items = [];
        // let active=1
        let total= this.props.totalPage;
        console.log(total)
        for (let number = 1; number <= total; number++) {
            items.push(
                <Pagination.Item key={number} onClick={async (e) => {
                    await this.handleInputPage(e.target.innerHTML)
                    await this.handleButtonPaginate()
                    console.log(e.target.key)
                    console.log('inputPage:'+this.state.inputPage)
                }}>
                    {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
            <div style={{backgroundColor:'#2E64FE'}}>
                <h2 style={{textAlign:'center',color:'white'}}>Đại học Bách khoa Hà Nội</h2>
                <h3 style={{textAlign:'center',color:'white'}}>Môn Đồ án 1</h3>
                <h4 style={{textAlign:'center',color:'white'}}>Thành viên: Lê Hoàng Anh-Nguyễn Đình Hùng-Trần Minh Chiến-Hà Đức Trường
</h4>
            </div>
        );
        if(this.props.categorys){
            console.log(this.props)
            listMenu = this.props.categorys.map((category, key)=>{
                return (
                    <div style={{ width: '90%' ,  height: '50px'}} key={key} >
                        <Button style={{width:'80%',textAlign:'center'}} variant="outline-primary" onClick={async (e)=>{
                            console.log('Tim kiem:',e.target.innerHTML)
                            await this.handleInputSearch(e.target.innerHTML)
                            await this.handleButtonSearch()
                        }}>{category.name}</Button>
                    </div>
                )
            })
        }

        if (this.props.items) {
            console.log(this.props)
            listData = this.props.items.map((item, key) => {
                return (
                    <div style={{ width: '25%', height: '430px', }}>
                        <Card style={{ width: '100%' }} key={key} >
                            <Card.Img variant="top" src={item.link} style={{ width: "100%" , height: "180px" }} />
                            <Card.Body style={{display:'flex',flexDirection:'column'}}>
                                <Card.Title style={{textAlign:'center',fontSize:'15px'}}>{item.title}</Card.Title>
                                <Card.Text style={{textAlign:'center',fontSize:'15px',color:'orange'}}>
                                    Giá tiền: {item.pay}
                                </Card.Text>
                                <Card.Text style={{textAlign:'center',fontSize:'15px',color:'red'}}>
                                    Số lượng: {item.num}
                                </Card.Text>
                                {/* <Button variant="primary">Mua sách</Button> */}
                                <Button variant="info" value={item._id} onClick={async (e) => {
                                    await this.handleInputUpdate(e.target.value)
                                    await this.setState({ name: item.title })
                                    await this.setState({ link: item.link })
                                    await this.setState({ pay: item.pay })
                                    await this.setState({ num: item.num })
                                    await this.setState({ _id: item._id })
                                    console.log(this.state.name + '-------------------')
                                    console.log('_id:',e.target.value)
                                    await this.setState({ isShow: true })
                                    console.log(this.state.isShow)
                                    // await this.handleButtonUpdate()
                                }}>Sửa</Button>
                                <Button variant="danger" value={item._id} onClick={async (e) => {
                                    await this.handleIdDelete(e.target.value)
                                    await this.handleButtonDelete()
                                    console.log("------------")
                                }}>Xóa</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
        if (this.props.pays) {
            console.log(this.props)
            listPay = this.props.pays.map((item, key) => {
                return (
                    <div style={{ width: '286px' , height: '372px' }}>
                        <Card style={{ width: '18rem' }} key={key} >
                            <Card.Body>
                                <Card.Title style={{color:'orange'}}>{item.nameCustom}</Card.Title>
                                <Card.Text >
                                    Địa chỉ: {item.address}
                                </Card.Text>
                                <Card.Text >
                                    Số lượng: {item.count}
                                </Card.Text>
                                <Card.Text >
                                    Tên sách: {item.bookName}
                                </Card.Text>
                                <Card.Text >
                                    Số điện thoại: {item.phone}
                                </Card.Text>
                                {/* <Button variant="primary">Mua sách</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
        return (
            <div className="">
                <div>
                    <Jumbotron style={{backgroundColor: '#2E64FE',padding:'2px 0',}}>
                        <h3 style={{color:'white',textAlign:'right'}}>Hello, {this.props.name}!</h3>
                        {/* <p style={{color:'white'}}>
                            Trang web bán sách
                        </p>
                        <p>
                            <input style={{ width: '1200px' }} onChange={(event) => {
                                this.handleInputSearch(event.target.value)
                            }}></input>
                            <Button variant="primary" onClick={() => {
                                this.handleButtonSearch()
                                console.log("------------")
                            }}>Tìm kiếm</Button>
                        </p>
                        <p>
                            <Button variant="primary" onClick={async () => {
                                await this.setState({ name: 'name' })
                                await this.setState({ link: 'link' })
                                await this.setState({ pay: 'pay' })
                                await this.setState({ num: 'num' })
                                await this.setState({ category: 'category' })
                                await this.setState({ isShow: true })
                            }}>
                                Thêm
                        </Button>
                        </p> */}
                        <div style={{width:'90%',margin:'0 auto',position:'relative'}}>
                            <h1 style={{color:'white'}}>Đồ án 1</h1>
                            <h5 style={{color:'white'}}>
                                Trang web bán sách
                            </h5>
                            <div style={{width:'800px',position:'absolute',right:'0',top:'30px'}}>
                                <p>
                                    <input style={{ width: '600px' }} onChange={(event) => {
                                        this.handleInputSearch(event.target.value)
                                    }}></input>
                                    <Button variant="light" style={{height:'30px',border:'0',padding:'0 20px',fontSize:'12px',marginTop:'-5px'}} onClick={() => {
                                        this.handleButtonSearch()
                                        console.log("------------")
                                    }}>Tìm kiếm</Button>
                                    <Button style={{height:'30px',border:'0',padding:'0 20px',fontSize:'12px',marginTop:'-5px'}} variant="primary" onClick={async () => {
                                await this.setState({ name: 'name' })
                                await this.setState({ link: 'link' })
                                await this.setState({ pay: 'pay' })
                                await this.setState({ num: 'num' })
                                await this.setState({ category: 'category' })
                                await this.setState({ isShow: true })
                            }}>
                                Thêm
                        </Button>
                                </p>
                            </div>
                            <br></br>
                        </div>
                        {this.state.isShow ?
                            <>


                                <Modal show={() => {
                                    this.setState({ isShow: false })
                                }} onHide={() => {
                                    this.setState({ isShow: false })
                                }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Thêm mới/Sửa</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <input type='text' value={this.state.name} onChange={(event) => {
                                            this.setState({ name: event.target.value })
                                            this.handleInputAddName(event.target.value)
                                            console.log(event.target.value)
                                        }}></input>
                                        <input type='text' value={this.state.pay} onChange={(event) => {
                                            this.setState({ pay: event.target.value })
                                            this.handleInputAddPay(event.target.value)
                                            console.log(event.target.value)
                                        }}></input>
                                        <input type='text' value={this.state.link} onChange={(event) => {
                                            this.setState({ link: event.target.value })
                                            this.handleInputAddLink(event.target.value)
                                            console.log(event.target.value)
                                        }}></input>
                                        <input type='text' value={this.state.num} onChange={(event) => {
                                            this.setState({ num: event.target.value })
                                            this.handleInputAddCategory(event.target.value)
                                            console.log(event.target.value)
                                        }}></input>
                                        <input type='text' value={this.state.category} onChange={(event) => {
                                            this.setState({ category: event.target.value })
                                            this.handleInputAddCategory(event.target.value)
                                            console.log(event.target.value)
                                        }}></input>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => {
                                            this.setState({ isShow: false })
                                        }}>
                                            Close
                    </Button>
                                        <Button variant="primary" onClick={async () => {
                                            await this.setState({ isShow: false })
                                            await this.handleButtonAdd()
                                        }}>
                                            Add
                    </Button>
                                        <Button variant="primary" onClick={async () => {
                                            await this.setState({ isShow: false })
                                            await this.handleButtonUpdate()
                                        }}>
                                            Update
                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                            :
                            null
                        }
                    </Jumbotron>
                    {/* <div className="list-category">
                        {listMenu}
                    </div>
                    <div className="list-item" style={{ margin: '10px 10px' }}>
                        {listData}
                        <h2>Don hang</h2>
                        {listPay}
                    </div> */}
                    <div style={{width:'90%',marginLeft:'5%',display:'flex',justifyContent:'center'}}>
                        <div className="list-category" style={{width:'20%'}}>
                            {listMenu}
                        </div>
                        <div className="list-item" style={{display:'flex',flexWrap:'wrap',width:'80%'}}>
                            {listData}
                        </div>
                    </div>
                    <h1 style={{textAlign:'center',color:'blue'}}>Đơn hàng</h1>
                    <div style={{display:'flex',width:'90%',marginLeft:'5%',flexWrap:'wrap',justifyContent:'center'}}>    
                        {listPay}
                    </div>
                    {paginationBasic}
                </div>
            </div>
        )
    }
}
export default ItemsAdmin;