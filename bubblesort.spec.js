describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item', function(){
      expect( bubbleSort([4]) ).toEqual( [4] );
  });

  it('handles multiple items', function(){
      expect( bubbleSort([4,1,3,0]) ).toEqual( [0,1,3,4] );
  });

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough(); 
    spyOn(window, 'compare').and.callThrough(); 
  });
  it('compares and swaps the correct number of times', function () {
    bubbleSort([4,1,3,0]);
    expect(swap.calls.count()).toEqual(5);
    expect(compare.calls.count()).toEqual(12);    
  });
});