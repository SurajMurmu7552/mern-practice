#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
    
    Node(int val){
        data = val;
        left = right = NULL;
    }
};


void Inorder(Node* root){
    stack<Node*> stack;
    
    Node* curr = root;
    
    while(!stack.empty() || curr!= NULL){
        if(curr != NULL){
            stack.push(curr);
            curr = curr->left;
        }else{
            curr = stack.top();
            stack.pop();
            cout<<curr->data<<endl;
            curr = curr->right;
        }
    }
}

void Preorder(Node* root){
    stack<Node*> st;
    
    Node* curr = root;

    while (!st.empty() || curr != NULL) {
        while (curr != NULL) {
            cout << curr->data << " ";
 
            if (curr->right)
                st.push(curr->right);
 
            curr = curr->left;
        }
 
        if (st.empty() == false) {
            curr = st.top();
            st.pop();
        }
    }
}

void Postorder(Node* root){
    stack<Node*> s;
    s.push(root);
 
    stack<int> out;
 
    while (!s.empty())
    {
        Node* curr = s.top();
        s.pop();
 
        out.push(curr->data);
 
        if (curr->left) {
            s.push(curr->left);
        }
 
        if (curr->right) {
            s.push(curr->right);
        }
    }
 
    // print postorder traversal
    while (!out.empty())
    {
        cout << out.top() << " ";
        out.pop();
    }
        
        
}



int main(){
    
    struct Node* root = new Node(10);
    
    root->left = new Node(20);
    root->left->left = new Node(40);
    root->right = new Node(30);
    root->right->right = new Node(50);
    
    // cout<<"Inorder"<<endl;
    // Inorder(root);
    
    cout<<"Preorder"<<endl;
    
    Preorder(root);
    
    // cout<<"Postorder"<<endl;
    // Postorder(root);
    
    return 0;
}