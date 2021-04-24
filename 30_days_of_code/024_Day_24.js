this.removeDuplicates=function(head){
    //Write your code here
            let ptr = head;
      let p = head.next;
      while (ptr.next) {
          if (ptr.data === p.data) {
              ptr.next = p.next;
              p = p.next
          } else {
              ptr = ptr.next;
              p = p.next;
          }
      }
      return head;
  }