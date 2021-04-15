/*no_day_14_solution_in_js
day_15*/
          //complete this method
          this.insert=function(head,data){
            let node = new Node(data)
            if(!head){
                head = node
            }else{
                let current = head
                while(current.next){
                current = current.next;
                }
                  current.next = node 
              }
              return head;
        };