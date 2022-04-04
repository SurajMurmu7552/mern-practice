#include <bits/stdc++.h>

using namespace std;

struct Node {
    int data;
    Node *left;
    Node *right;

    Node (int value){
        data = value;
        right = left = NULL;
    }
};

void Insert(Node** root , int val){
    if((*root) == NULL){
        *root = new Node(val);
        return;
    }

    if(val < (*root)->data) Insert((&(*root)->left),val);
    else if(val > (*root)->data) Insert((&(*root)->right),val);
    else if((*root)->data == val)   cout<<(*root)->data<<" element already exists\n";
}

void storeInorder(Node *root , vector<int> &arr){
    if(root == NULL)    return;

    storeInorder(root->left,arr);
    arr.push_back(root->data);
    storeInorder(root->right,arr);
}

bool isBST(Node *root){
    vector<int> arr ;
    storeInorder(root , arr);

    for(auto i = 1 ; i<arr.size() ; i++){
        // cout<<arr[i]<<" ";
        if(arr[i-1]  >  arr[i])    return false;
    }

    return true;

}


int main(){
    Node *root = NULL;
    int arr[] = {2,3,4,5,6,7,8};
    for(auto a:arr){
        Insert(&root , a);
    }


    if(isBST(root)) cout<<"Is a BST";
    else    cout<<"Not a BST";

    // isBST(root);
    return 0;
}