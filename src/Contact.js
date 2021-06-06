import styles from './Contact.css';
import Drawer from '@material-ui/core/Drawer';

const Contact = (props) => {
    const goToBack = () => {
        props.setIsSidebarOpen(!props.isSidebarOpen)
    }
    return (
        <>
            <div style={{width:'100px'}}>
                <Drawer
                        variant="temporary"
                        anchor={'right'}
                        open={props.isSidebarOpen}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                    <div className="container back_color">
                        <div className="row">
                            <div className="mt-5" onClick={goToBack} style={{cursor:'pointer'}}>
                                
                                <i class="fa fa-arrow-left " aria-hidden="true"></i>
                                <span className="mx-2">back</span>
                            </div>
                            <div className="row text-light ul_list mt-5">
                                <ul className="list1">
                                    <li> 
                                        <h3>
                                            Say Hello
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-light mt-3">
                                <label>NAME</label><br/>
                                <input className="input_name" type="text" placeholder="YOUR NAME" />
                            </div>
                            <div className="text-light mt-3">
                                <label>NAME</label><br/>
                                <input className="input_name" type="text" placeholder="YOUR NAME" />
                            </div>
                            <div className="text-light mt-3">
                                <label>NAME</label><br/>
                                <input className="input_name" type="text" placeholder="YOUR NAME" />
                            </div>
                            <div className="text-light mt-3">
                                <button className="btn_submit">
                                    <span className="mx-2">Submit</span>
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    );
}
export default Contact