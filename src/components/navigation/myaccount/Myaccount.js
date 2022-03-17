import * as React from 'react';
import  AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import styles from './myaccount.module.scss'
import clsx from 'clsx';
function Myaccount() {  
    return (
       <div className={styles.myaccount}>
           <div className={clsx(styles.myaccountitem,styles.profile)}>
               <AccessTimeIcon  sx={{fontSize:'25px'}}/>
               <span>History</span>
               <ul className={styles.usermenu}>
                                <li className={styles.useritem}>
                                    <span>Lịch sử xem trống</span>
                                </li>
                            </ul>
           </div>
           <div className={clsx(styles.myaccountitem,styles.profile)}>
               <PersonOutlineRoundedIcon  sx={{fontSize:'25px'}}/>
               <span>Me</span>
               <ul className={styles.usermenu}>
                                <li className={styles.useritem}>
                                    <span>Tài khoản của tôi</span>
                                </li>
                                <li className={styles.useritem}>
                                    <span>Đơn mua</span>
                                </li>
                                <li className={styles.useritem}>
                                    <span>Đăng xuất</span>
                                </li>
                            </ul>
           </div>
       </div>
      )
}

export default Myaccount