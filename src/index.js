import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'



const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    
                </div>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45PM" content="Good post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00AM" content="very clean post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Today at 5:00PM" content="Nice blog post!" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))