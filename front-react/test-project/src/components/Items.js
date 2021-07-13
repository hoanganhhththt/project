import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination'
import Modal from 'react-bootstrap/Modal'

class Items extends Component {
    state = {
        inputAdd: "",
        id: 0,
        inputUpdate: "",
        idDelete: 0,
        inputSearch: "",
        inputLimit: 5,
        inputPage: 1,
        inputAddName: "",
        inputAddPay: "",
        inputAddCategory: "",
        inputAddLink: "",
        isShow: false,
        active:1,
        tdn: '',
        pass: '',
        link: '',
        save: {
            nameCustom: '',
            phone: '',
            address: '',
            count:'',
            idBook: '',
        }
    }

    handleInputAdd(val) {
        this.setState({ inputAdd: val });
    }
    handleInputAddName(val) {
        this.setState({ inputAddName: val })
    }
    handleInputAddPhoneNumber(val) {
        this.setState({ phone: val })
    }
    handleInputAddAddress(val) {
        this.setState({ address: val })
    }
    handleInputAddCount(val) {
        this.setState({ count: val })
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

    handleButtonPay = ()=>{
        this.props.payDispatch(this.state.idBook,this.state.nameCustom,this.state.phone,this.state.address,this.state.count)
    }

    handleButtonDelete = () => {
        console.log("id cần xóa :", this.state.idDelete)
        this.props.deleteDispatch(this.state.idDelete)
    }

    handleButtonSearch = () => {
        console.log("tìm kiếm:", this.state.inputSearch)
        this.props.searchDispatch(this.state.inputSearch)
    }

    handleButtonPaginate = () => {
        console.log("phân trang:", this.state.inputLimit, this.state.inputPage)
        this.props.paginateDispatch(this.state.inputLimit, this.state.inputPage)
    }
    // handleButtonID = (e) =>{
    //     console.log(e.target.value)
    // }
    handleButtonLogin = (a) => {
        if (this.state.tdn === this.state.pass === 'admin') {
            this.setState({ link: '/itemsAdmin' })
        } else {
            this.setState({ link: '' })
        }
    }
    render() {
        let listData = [];
        let listMenu = [];
        let items = [];
        let total= this.props.totalPage
        console.log(this.props)
        console.log(total)
        for (let number = 1; number <= total; number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.active} onClick={async (e) => {
                    console.log(e.target.value)
                    console.log(this.state.active)
                    await this.handleInputPage(e.target.innerHTML)
                    await this.handleButtonPaginate()
                    console.log(e.target.key)
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
            listData = this.props.items.map((item, key) => {
                return (
                    <div style={{ width: '25%', height: '400px', }}>
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
                                <Button variant="primary" value={item._id} onClick={async (e) => {
                                    await this.setState({ idBook:e.target.value  })
                                    console.log(this.state.name + '-------------------')
                                    console.log('_id:',e.target.value)
                                    await this.setState({ isShow: true })
                                    console.log(this.state.isShow)
                                }}>Mua sách</Button>
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
                        <p style={{display:'flex',justifyContent:'flex-end'}}>
                            <input style={{border:'0',marginRight:'2px'}} type="text" placeholder="Tên đăng nhập" onChange={(e) => {
                                this.setState({ tdn: e.target.value })
                                console.log(e.target.value)
                            }}></input>
                            <input style={{border:'0',marginRight:'2px'}} type="password" placeholder="Mật khẩu" onChange={(e) => {
                                this.setState({ pass: e.target.value })
                                console.log(e.target.value)
                            }}></input>
                            <Button variant="primary" onClick={async () => {
                                if (this.state.tdn === 'admin' && this.state.pass === 'admin') {
                                    sessionStorage.setItem("dn", true)
                                    window.location.replace("/items")
                                } else {
                                    alert("Đăng nhập không thành công")
                                }
                            }}>Đăng nhập</Button>
                        </p>
                        <div style={{width:'90%',margin:'0 auto',position:'relative'}}>
                            <h1 style={{color:'white'}}>Đồ án 1</h1>
                            <h5 style={{color:'white'}}>
                                Trang web bán sách
                            </h5>
                            <div style={{width:'700px',position:'absolute',right:'0',top:'30px'}}>
                                <p>
                                    <input style={{ width: '600px' }} onChange={(event) => {
                                        this.handleInputSearch(event.target.value)
                                    }}></input>
                                    <Button variant="light" style={{height:'30px',border:'0',padding:'0 20px',fontSize:'12px',marginTop:'-5px'}} onClick={() => {
                                        this.handleButtonSearch()
                                        console.log("------------")
                                    }}>Tìm kiếm</Button>
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <p>
                            {/* <Button variant="primary" onClick={()=>{
                                    this.setState({isShow:true})
                                }}>
                            Thêm
                        </Button> */}
                        </p>
                        {this.state.isShow ?
                            <>


                                <Modal show={() => {
                                    this.setState({ isShow: false })
                                }} onHide={() => {
                                    this.setState({ isShow: false })
                                }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Mua sách</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <input type='text' placeholder='name' onChange={(event) => {
                                            this.setState({nameCustom:event.target.value})
                                        }}></input>
                                        <input type='text' placeholder='Phone Number' onChange={(event) => {
                                            this.setState({phone:event.target.value})
                                        }}></input>
                                        <input type='text' placeholder='Address' onChange={(event) => {
                                            this.setState({address:event.target.value})
                                        }}></input>
                                        <input type='text' placeholder='Count' onChange={(event) => {
                                            this.setState({count:event.target.value})
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
                                            await this.handleButtonPay()
                                        }}>
                                            Pay
                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                            :
                            null
                        }
                    </Jumbotron>
                    <div style={{width:'90%',marginLeft:'5%',display:'flex',justifyContent:'center'}}>
                        <div className="list-category" style={{width:'20%'}}>
                            {listMenu}
                        </div>
                        <div className="list-item" style={{display:'flex',flexWrap:'wrap',width:'80%'}}>
                            {listData}
                        </div>
                    </div>
                    {paginationBasic}
                </div>
            </div>
        )
    }
}
export default Items;

//container phat ra action roi. BTVN ben reducer bat dk du lieu vua phat, console.log ra. Ben Saga cung bat dk du lieu va log ra du lieu. Tao ra 1 ngan nho trong reducer de luu du lieu do. Cap nhat laij o container bang mapStateTo Props roi log ra