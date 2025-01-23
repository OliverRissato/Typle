from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
from .utils import get_daily_phrase

def new_game(request):
  if request.method == 'POST':
    daily_phrase = get_daily_phrase()
    request.session['daily_phrase'] = daily_phrase
    request.session['tries'] = []
    request.session['best_try'] = 0
    request.session['try_history'] = []
    return JsonResponse({'success': True, 'daily_phrase' : daily_phrase})

def typle_game(request):
 return render(request, 'game.html')